const { expect } = require('chai');
const getPackagesVersions = require('..');


describe('Packges Versions', () => {

  it('Success response [ versions of `short-objectid` ] ..', async () => {
    let VersionsList = await getPackagesVersions('short-objectid');

    expect(VersionsList.indexOf('1.0.0')).to.not.equal(-1);
  });
  
  it('Failed response [ error for any reason ] ..', async () => {
    try {
      await getPackagesVersions('short-objectidxxxxxxxxxxxxx');
    }catch(err){
      expect(err).to.be.ok;
    }
  });

  it('Success Opts [ use reverse opt for sort the response ] ..', async () => {
    let VersionsListWithOutOps = await getPackagesVersions('short-objectid');
    let VersionsListWithOps = await getPackagesVersions('short-objectid', { reverse: true });

    expect(VersionsListWithOutOps.reverse()).to.deep.equal(VersionsListWithOps);
  });

});