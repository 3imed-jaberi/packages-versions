const https = require('https');
const semver = require('semver');

/**
 * Through this function you get a list of your package input name..
 * @param {String} PackageName: name of the npm package .. 
 * @param {Object} Opts: options for foramt result ..
 */
module.exports = function (PackageName, Opts) {
  // TODO: add more options like filter/extract ..
  Opts = Opts || {};
  const reverse = Opts.reverse || false;

  return new Promise((resolve, reject) => {
    https.request({
        method: 'GET',
        host: 'registry.npmjs.org',
        path:  `/${PackageName}`,
        headers: { 'Content-Type': 'application/json' },
        agent: false,
      },
      response => {

        if (response.statusCode !== 200) {
          return reject(new Error(`Failed to get npmjs.org/${PackageName} version(s).`).message);
        }     

     
        let data = '';
        response.setEncoding('utf8');
        response.on('data', (letter) => { data += letter });
        response.once(
          'end', 
          () => {
            // TODO: make this part more better for put more opts.
            const ResponseData = Object
                            .keys(JSON.parse(data).versions)
                            .filter(version => semver.valid(version))
                            .sort(semver.rcompare);
            const result = reverse ? ResponseData.reverse() : ResponseData;
            
            resolve(result);
          }
        );
    })
    // TODO: think about custom error .. 
    .on('error', error => reject(error.message))
    .end();
  });
}