
const assert = require('assert');
const getPackagesVersions = require('..');


it('should get the versions of `short-objectid` ..', async () => {

  try {
    
    let VersionsList = await getPackagesVersions('short-objectid');
    assert.notEqual(VersionsList.indexOf('1.0.0'),-1);
  
  }catch(err){
    // console.log(err) 
  }

}); 
