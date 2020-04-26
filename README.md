# PACKAGES VERSIONS 🪁
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

> I don't intend to make breaking changes to this package 🙌🏻. So, don't be afraid to upgrade ✨. <br/> I added Opts argument (Optional) to the function for give you more control 🎮. 

## `Installation`

```bash
# npm ..
$ npm install packages-versions
# yarn ..
$ yarn add packages-versions
```


## `Usage`

This is a practical example of how to use.

```javascript
  // you can use any name for this function.
  // the result is an array of versions in descending order.
  const getPackagesVersions = require ('packages-versions');

  // note: you can use the promise way (then/catch)

  (async () => {
    try {
      let list = await getPackagesVersions('packages-versions');
      console.log(list);
    }catch(err){
      console.log(err) 
    }
  })();
  // Result: 
  // [ '2.1.0', '2.0.0', '1.1.1', '1.1.0', '1.0.1', '1.0.0' ]

  // the same example with reverse opt.
  (async () => {
    try {
      let list = await getPackagesVersions('packages-versions', { reverse: true });
      console.log(list);
    }catch(err){
      console.log(err) 
    }
  })();
  // Result: 
  // [ '1.0.0', '1.0.1', '1.1.0', '1.1.1', '2.0.0', '2.1.0' ]

  // the same example with extract opt.
    try {
      let list = await getPackagesVersions('packages-versions', { extract: { rc: true } });
      console.log(list);
    }catch(err){
      console.log(err) 
    }
  })();
  // Result: // we don't have any rc package.
  // []

```

### `Options Ref.` 

  | Option      | Type      | Descriptio                                                      |
  | ----------- | --------- | --------------------------------------------------------------- |
  | `reverse`   | Boolean   | Reverse the order of the results (versions array).              |
  | `extract`   | Object    | Extract only the type of version you want.                      |

**Note:** `extract` can contain one, some or all of these values ​​in a boolean form (pure: X.X.X, rc: X.X.X-rc, beta: X.X.X-beta, alpha: X.X.X-alpha).

> __You can combine `reverse` and `extract`.__


#### License
---
[MIT](LICENSE)
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://twitter.com/joelbdenning"><img src="https://avatars1.githubusercontent.com/u/5524384?v=4" width="100px;" alt=""/><br /><sub><b>Joel Denning</b></sub></a><br /><a href="https://github.com/3imed-jaberi/packages-versions/commits?author=joeldenning" title="Documentation">📖</a></td>
    <td align="center"><a href="https://3imed-jaberi.com"><img src="https://avatars2.githubusercontent.com/u/43971542?v=4" width="100px;" alt=""/><br /><sub><b>imed jaberi</b></sub></a><br /><a href="https://github.com/3imed-jaberi/packages-versions/commits?author=3imed-jaberi" title="Documentation">📖</a> <a href="#infra-3imed-jaberi" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-3imed-jaberi" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!