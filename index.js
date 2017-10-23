"use strict";

var REG_GETTPATH = /\[(['"a-zA-Z0-9]*)\]|\./gi;
var REG_REPLACE_QUOTES = /[\'\"]/gi;

var easyGet = function (data, path, options = {}) {
    var pathArr = path.split(REG_GETTPATH).filter(x => x !== undefined);
    var result = pathArr.reduce(
        (result, currentPath, currentIndex) => {
            if (!result.startErrorPath) {
                var key = currentPath.replace(REG_REPLACE_QUOTES, '');
                result.value = result.value[key];
                if (currentIndex !== pathArr.length - 1) {
                    if (Object.prototype.toString.call(result.value) === '[object Undefined]') {
                        result.startErrorPath = currentPath;
                    }
                }
            }
            return result;
        },
        { value: data, startErrorPath: null }
    );
    if (options.errorCallback && Object.prototype.toString.call(options.errorCallback) === '[object Function]') {
        options.errorCallback(result.startErrorPath, pathArr);
    }
    return result.value;
};

exports.easyGet = easyGet;