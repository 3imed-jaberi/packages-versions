const https = require('https')
const semver = require('semver')

/**
 * through this function you get a list of your package input name.
 * 
 * @param {String} pkgName    name of the npm package.
 * @param {Object} opts       options for foramt result (more control). 
 *                            you can pass `reverse` as boolean or `extract` 
 *                            as object with boolean props like this 
 *                            { pure: true, rc: true, beta: true, alpha:true }
 *                            or both.
 */
module.exports = function (pkgName, opts) {
  opts = opts || {}
  const reverse = opts.reverse || false
  const extract = opts.extract || null

  return new Promise((resolve, reject) => {
    https.request({
        method: 'GET',
        host: 'registry.npmjs.org',
        path:  `/${pkgName}`,
        headers: { 'Content-Type': 'application/json' },
        agent: false,
      },
      response => {
        if (response.statusCode !== 200) {
          return reject(new Error(`Failed to get npmjs.org/${pkgName} version(s).`))
        }     

        let data = ''
        response.setEncoding('utf8')
        response.on('data', letter => { data += letter })
        response.once(
          'end', 
          () => {
            let versionsResult
            const versionsResponse = Object
                .keys(JSON.parse(data).versions)
                .filter(version => semver.valid(version))
                .sort(semver.rcompare)

          // **************************** handle options **************************** //
            // handle `extract` option
            if (extract) {
              const { pure, rc, beta, alpha } = extract

              versionsResult = (() => {
                // when all extract fields are true, don't need to diving in loops
                if(pure && rc && beta && alpha) {
                  return versionsResponse
                }
                // simple but clean, here we forced to loops
                return versionsResponse.filter(version => {
                  if(pure && version.length === 'X.X.X'.length) return version
                  if(rc && version.includes('rc')) return version
                  if(beta && version.includes('beta')) return version
                  if(alpha && version.includes('alpha')) return version
                  return false
                })
              })()  
            }

            // handle `reverse` option
            if(reverse) {
              versionsResult = extract ? versionsResult.reverse() : versionsResponse.reverse()
            }

          // ************************************************************************ //
            resolve(Object.keys(opts).length !== 0 ? versionsResult : versionsResponse)
          }
        )
    })
    .on('error', error => reject(error.message))
    .end()
  })
}
