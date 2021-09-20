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
    var daily = function () {
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
        if (curTime < midNight) {
            _setStorage("midnight", new Date().setHours(24, 0, 0, 0));
            if (advices[cnt + 1]) {
                _setStorage("cnt", cnt + 1);
                return advices[cnt + 1];
            }
            _setStorage("cnt", 0);
            return advices[0];
        }
        return advices[cnt];
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
/**
 * 한국어로 된 명언 모음입니다.
 *
 * ---
 * 기본 형식은 다음과 같습니다.
 * @function get(tag?: 1 | 2 | 3)
 *
 * const advices = kadvice.get();
 *
 * tag 번호에 따라 명언의 유형을 달리 불러올 수도 있습니다.
 *
 * const advices = kadvice.get(1);
 *
 *  ---
 *
 * random() 함수는 기본적으로 하나를 랜덤으로 불러옵니다.
 * @function random(tag?: 1 | 2 | 3)
 *
 * const advice = kadvice.random();
 *
 * tag 번호에 따라 해당하는 태그의 명언 중 하나를 갖고 올 수도있습니다.
 *
 * const advice = kadvice.random(1);
 */
exports.default = { random: exports.random, get: exports.get, daily: exports.daily };
