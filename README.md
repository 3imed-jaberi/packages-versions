
# PACKAGES VERSIONS
---

[![Build Status](https://travis-ci.org/3imed-jaberi/packages-versions.svg?branch=master)](https://travis-ci.org/3imed-jaberi/packages-versions)

[![Coverage Status](https://coveralls.io/repos/github/3imed-jaberi/packages-versions/badge.svg?branch=master)](https://coveralls.io/github/3imed-jaberi/packages-versions?branch=master)

#### The purpose of this module is to convert numbers from any base to other base you want ..


## Installation 
---
- NPM :
```bash
$ npm install packages-versions
```

- YARN :
```bash
$ yarn add packages-versions
```


## Usage 
---
 The method of use is simple and very easy ... Just follow these steps :


```javascript


// you can use any name for this function .. 
const getPackagesVersions = require ('packages-versions');


// Pormise way : 
          getPackagesVersions('any-to-any')
                    .then(data => console.log(`Versions List Using Promise : \n`,data))
                    .catch(err => console.log(err));


// Async/Await way : 
const useGetPackagesVersions = async () => {

  try {
    
    let list = await getPackagesVersions('any-to-any');
    console.log('Versions List Using Async/Await : \n',list);

  }catch(err){
     console.log(err) 
  }
}

 useGetPackagesVersions();

```

Result: 

```bash
$your_pc_name_with_your_directory

# Promise result : 
Versions List Using Promise :
 [ '1.5.1',
  '1.5.0',
  '1.4.0',
  '1.3.1',
  '1.3.0',
  '1.2.0',
  '1.1.2',
  '1.1.1',
  '1.1.0',
  '1.0.0' ]

  
# Async/Await result :
Versions List Using Async/Await :
 [ '1.5.1',
  '1.5.0',
  '1.4.0',
  '1.3.1',
  '1.3.0',
  '1.2.0',
  '1.1.2',
  '1.1.1',
  '1.1.0',
  '1.0.0' ]
```


#### License
---
[MIT](https://choosealicense.com/licenses/mit/) 