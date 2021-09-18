"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.random = exports.quotes = void 0;
var data_1 = require("./data");
var _shuffle = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};
var _get = function (quotes) {
    return function (tag) {
        if (tag) {
            return quotes.filter(function (lst) { return lst.tag === tag; });
        }
        return quotes;
    };
};
var _random = function (quotes) {
    return function (tag) {
        if (tag) {
            var filter = quotes.filter(function (lst) { return lst.tag === tag; });
            return _shuffle(filter);
        }
        return _shuffle(quotes);
    };
};
/**
 * 한국어로 된 명언 모음입니다.
 */
var quotes = data_1.data;
exports.quotes = quotes;
/**
 * 1-3까지의 태그타입을 인자로 넣으면 태그에 해당하는 명언 중 하나를 불러옵니다.
 * @function random(tag?: 1 | 2 | 3)
 *
 * const quote = random()
 *
 */
var random = _random(quotes);
exports.random = random;
/**
 * 1-3까지의 태그타입을 인자로 넣으면 태그에 해당하는 명언을 불러옵니다.
 *
 * @function get(tag?: 1 | 2 | 3)
 *
 * const quotes = get()
 */
var get = _get(quotes);
exports.get = get;
/**
 * 한국어로 된 명언 모음입니다.
 *
 * const quotes = kadvice.quotes;
 *
 * ---
 * tag 번호에 따라 명언의 유형을 달리 부를 수 있습니다.
 *
 * 1 = 삶 관련 2 = 동기부여 관련 3 = 그외
 *
 * @function get(tag?: 1 | 2 | 3)
 *
 * const quotes = kadvice.get();
 *
 * @function random(tag?: 1 | 2 | 3)
 *
 * const quote = kadvice.random();
 */
exports.default = { quotes: quotes, random: random, get: get };
