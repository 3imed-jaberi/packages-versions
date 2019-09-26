
const https = require('https');
const semver = require('semver');



  /**
   * 
   * Through this function you get a list of your package input name..
   * @param {String} PackageName : The name of the npm package ..
   * @return {Array} 
   * @public
   * 
   */


module.exports = PackageName => new Promise((resolve, reject) => {

    https.request({
          method: 'GET',
          host: 'registry.npmjs.org',
          path: '/' + PackageName,
          headers: { 'Content-Type': 'application/json' },
          agent: false,
        }, response => {
          
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to get npmjs.org/${PackageName} version(s).`).message);
      }     
 
                    
        let data = '';
        response.setEncoding('utf8');
        response.on('data', (letter) => { data += letter });
        response.once('end',() => resolve(
                                    Object
                                        .keys(JSON.parse(data).versions)
                                        .filter( version => semver.valid(version))
                                        .sort(semver.rcompare)
                                  ));     
    })

    .on('error', error => reject(error.message))
    // send the request
    .end();

  });
