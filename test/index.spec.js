require('mocha')
const { expect } = require('chai')
const getPackagesVersions = require('..')

describe('Packges Versions', () => {
  it('Success response [ versions of `short-objectid` ] ..', async () => {
    let VersionsList = await getPackagesVersions('short-objectid')

    expect(VersionsList.indexOf('1.0.0')).to.not.equal(-1)
  })

  it('Failed response [ error for any reason ] ..', async () => {
    try {
      await getPackagesVersions('short-objectidxxxxxxxxxxxxx')
    }catch(err){
      expect(err).to.be.ok
    }
  })

  it('Opts [ use reverse opt only for sort the response ] ..', async () => {
    let VersionsListWithOutOps = await getPackagesVersions('short-objectid')
    let VersionsListWithOps = await getPackagesVersions('short-objectid', { reverse: true })

    expect(VersionsListWithOutOps.reverse()).to.deep.equal(VersionsListWithOps)
  })

  it('Opts [ use extract opt with rc field to get only rc versions ] ..', async () => {
    let VersionsListWithOutOps = await getPackagesVersions('short-objectid')
    let VersionsListWithOps = await getPackagesVersions('short-objectid', { extract: { rc: true } })

    expect(VersionsListWithOutOps.filter(version => version.includes('rc'))).to.deep.equal(VersionsListWithOps)
  })

  it('Opts [ use extract opt with multi fields to get versions ] ..', async () => {
    let VersionsListWithOutOps = await getPackagesVersions('short-objectid')
    let VersionsListWithOps = await getPackagesVersions('short-objectid', { extract: { pure: true, rc: false, beta: true, alpha: true } })

    expect(VersionsListWithOutOps.filter(version => version.length === 5 || version.includes('beta') || version.includes('alpha'))).to.deep.equal(VersionsListWithOps)
  })

  it('Opts [ use extract opt with all fields to get versions ] ..', async () => {
    let VersionsListWithOutOps = await getPackagesVersions('short-objectid')
    let VersionsListWithOps = await getPackagesVersions('short-objectid', { extract: { pure: true, rc: true, beta: true, alpha: true } })

    expect(VersionsListWithOutOps).to.deep.equal(VersionsListWithOps)
  })

  it('Opts [ use extract opt with reverse opt ^^ ] ..', async () => {
    let VersionsListWithOutOps = await getPackagesVersions('short-objectid')
    let VersionsListWithOps = await getPackagesVersions('short-objectid', { extract: { rc: true, pure: true }, reverse: true })

    expect(VersionsListWithOutOps.filter(version => version.includes('rc') || version.length === 5).reverse()).to.deep.equal(VersionsListWithOps)
  })
})
