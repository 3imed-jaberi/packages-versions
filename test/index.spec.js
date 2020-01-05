const assert = require('assert');
const getPackagesVersions = require('..');



it('get the success response < versions of `short-objectid` > ..', async () => {

  // remove the try-catch ..
  let VersionsList = await getPackagesVersions('short-objectid');
  assert.notEqual(VersionsList.indexOf('1.0.0'), -1);
  
}); 


it('get the failed response < error msg > ..', async () => {

  try {

    await getPackagesVersions('short-objectid+2');

  }catch(err){

    assert.ok(true);
    
  }

}); 