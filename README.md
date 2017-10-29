# easy-get
[![Build Status](https://travis-ci.org/HuangQiii/easy-get.svg?branch=master)](https://travis-ci.org/HuangQiii/easy-get)

从对象中多次获得属性不报错
get property from an object(even the property is wrong) without error

**Installation**

```
npm install --save easy-get
```

**Usage**

```javascript
const easyGet = require('easy-get');

const obj = {
    a: {
        b: 1
    }
};

easyGet.easyGet(obj, 'a');//{b: 1}
easyGet.easyGet(obj, 'a.b');//1
easyGet.easyGet(obj, 'a.b.c');//undefined
easyGet.easyGet(obj, 'a.b.c.d.e.f');//undefined

easyGet.easyGet(obj, 'a.b.c.d', options = { errorCallback: function (ep, pa) { console.log(ep), console.log(pa) } });
//c
//[ 'a', 'b', 'c', 'd' ]
//undefined
//ep is errorstratpath,here is c
//pa is pathall,here is an array a,b,c,d
```

**Instructions**
在代码中，有一处
in the code,there have one code
```javascript
...
const easyGet = function (data, path, options) {
    options = options || {};
    ...
```
而不是
rather than
```jacascript
...
const easyGet = function (data, path, options={}) {
...
```
是因为travis CI跑不过，暂时不清楚原因，如有了解者请告诉我，谢谢
because of the travis CI run failed,but i do not know why,please tell me,thx
