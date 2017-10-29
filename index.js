"use strict";

const REG_GETTPATH = /\[(['"a-zA-Z0-9]*)\]|\./gi;
const REG_REPLACE_QUOTES = /[\'\"]/gi;

const easyGet = function (data, path, options) {
    options = options || {};
    const pathArr = path.split(REG_GETTPATH).filter(x => x !== undefined);
    const result = pathArr.reduce(
        (result, currentPath, currentIndex) => {
            if (!result.startErrorPath) {
                const key = currentPath.replace(REG_REPLACE_QUOTES, '');
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