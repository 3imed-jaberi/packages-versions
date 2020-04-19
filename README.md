
# PACKAGES VERSIONS 🪁

[![Build Status][travis-badge]][travis-url] &nbsp;&nbsp;
[![Coverage Status][coveralls-badge]][coveralls-url] &nbsp;&nbsp;
[![NPM version][npm-badge]][npm-url] &nbsp;&nbsp;
[![License][license-badge]][license-url] &nbsp;&nbsp;
![Top Language][top-language-badge] &nbsp;&nbsp;
![Code Size][code-size-badge] &nbsp;&nbsp;
[![Code of Conduct][coc-badge]][coc-url]
[![PRs Welcome][pr-badge]][pr-url] &nbsp;&nbsp;

[travis-badge]: https://travis-ci.org/3imed-jaberi/packages-versions.svg?branch=master
[travis-url]: https://travis-ci.org/3imed-jaberi/packages-versions
[coveralls-badge]: https://coveralls.io/repos/github/3imed-jaberi/packages-versions/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/3imed-jaberi/packages-versions?branch=master
[npm-badge]: https://img.shields.io/npm/v/packages-versions.svg?style=flat
[npm-url]: https://www.npmjs.com/package/packages-versions
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: https://github.com/3imed-jaberi/packages-versions/blob/master/LICENSE
[top-language-badge]: https://img.shields.io/github/languages/top/3imed-jaberi/packages-versions
[code-size-badge]: https://img.shields.io/github/languages/code-size/3imed-jaberi/packages-versions
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc-url]: https://github.com/3imed-jaberi/packages-versions/blob/master/CODE_OF_CONDUCT.md
[pr-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[pr-url]: https://github.com/3imed-jaberi/packages-versions/blob/master/CONTRIBUTING.md

GET ALL VERSIONS OF ANY PACKAGES 🗃 .. 

> I don't intend to make breaking changes to this package 🙌🏻. So, don't be afraid to upgrade ✨. <br/> I added Opts argument to the function for give you more control 🎮. 

**Note:** v2.1.0 ~ currently 1 option it's available ` ({ reverse: true})`.

## `Installation`

```bash
# npm ..
$ npm install packages-versions
# yarn ..
$ yarn add packages-versions
```

## `Usage`

This is a practical example of how to use.

### Example:

```javascript
// you can use any name for this function .. 
// The array of versions will be sorted in descending order
const getPackagesVersions = require ('packages-versions');
// Promise way : 
          getPackagesVersions('any-to-any')
                    .then(data => console.log(`Versions List Using Promise: \n`, data))
                    .catch(err => console.log(err));
// Async/Await way || you can use IIFE < (func)() > : 
const useGetPackagesVersions = async () => {
  try {
    let list = await getPackagesVersions('any-to-any');
    console.log('Versions List Using Async/Await: \n', list);
  }catch(err){
     console.log(err) 
  }
}
useGetPackagesVersions();

// NEW UPDATE ^^ 🥳 ..  
const packagesVersionsWithOpts = async () => {
  try {
    let list = await getPackagesVersions('any-to-any', { reverse: true });
    console.log('Versions List Using Async/Await with Opts: \n', list);
  }catch(err){
     console.log(err) 
  }
}
```

### Result: 

```bash
$your_pc_name_with_your_directory

# Promise result : 
Versions List Using Promise:
[ '1.5.1', '1.5.0', '1.4.0', '1.3.1', '1.3.0', '1.2.0', '1.1.2', '1.1.1', '1.1.0', '1.0.0' ]
  
# Async/Await result :
Versions List Using Async/Await:
[ '1.5.1', '1.5.0', '1.4.0', '1.3.1', '1.3.0', '1.2.0', '1.1.2', '1.1.1', '1.1.0', '1.0.0' ]

# NEW UPDATE ^^ 🥳 .. 
# packagesVersionsWithOpts result: 
Versions List Using Async/Await with Opts:
[ '1.0.0', '1.1.0', '1.1.1', '1.1.2', '1.2.0', '1.3.0', '1.3.1', '1.4.0', '1.5.0', '1.5.1' ]

```


#### License
---
[MIT](LICENSE)