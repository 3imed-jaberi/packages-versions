const assert = require('assert');
const getPackagesVersions = require('..');


describe('Packges Versions', () => {

  it('Success response [ versions of `short-objectid` ] ..', async () => {
    let VersionsList = await getPackagesVersions('short-objectid');
    assert.notEqual(VersionsList.indexOf('1.0.0'), -1);
  });
  
  it('Failed response [ error for any reason ] ..', async () => {
    try {
      await getPackagesVersions('short-objectidxxxxxxxxxxxxx');
    }catch(err){
      assert.ok(true);
    }
  });

});