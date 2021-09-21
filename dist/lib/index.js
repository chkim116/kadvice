"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.daily = exports.get = exports.random = void 0;
var data_1 = require("./data");
var _shuffle = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};
var _getStorage = function (key) {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    else {
        return null;
    }
};
var _setStorage = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};
var init = function () {
    var advices = data_1.data;
    var daily = function (tag) {
        var dailyAdvices = tag
            ? advices.filter(function (lst) { return lst.tag === tag; })
            : advices;
        var cnt = _getStorage("cnt");
        var midNight = _getStorage("midnight");
        var curTime = new Date().getTime();
        if (!cnt) {
            cnt = 0;
            _setStorage("cnt", 0);
        }
        if (!midNight) {
            midNight = new Date().setHours(24, 0, 0, 0);
            _setStorage("midnight", new Date().setHours(24, 0, 0, 0));
        }
        if (curTime >= midNight) {
            _setStorage("midnight", new Date().setHours(24, 0, 0, 0));
            if (dailyAdvices[cnt + 1]) {
                _setStorage("cnt", cnt + 1);
                return dailyAdvices[cnt + 1];
            }
            _setStorage("cnt", 0);
            return dailyAdvices[0];
        }
        return dailyAdvices[cnt];
    };
    var get = function (tag) {
        if (tag) {
            return advices.filter(function (lst) { return lst.tag === tag; });
        }
        return advices;
    };
    var random = function (tag) {
        if (tag) {
            var filter = advices.filter(function (lst) { return lst.tag === tag; });
            return _shuffle(filter);
        }
        return _shuffle(advices);
    };
    return { random: random, get: get, daily: daily };
};
exports.random = (_a = init(), _a.random), exports.get = _a.get, exports.daily = _a.daily;
exports.default = init();
