import { data } from "./data";
import { QuoteType, TagType } from "../@types/type";

const _shuffle = (array: QuoteType[]) => {
    return array[Math.floor(Math.random() * array.length)];
};

const _get = (quotes: QuoteType[]) => {
    return (tag?: TagType) => {
        if (tag) {
            return quotes.filter((lst) => lst.tag === tag);
        }
        return quotes;
    };
};

const _random = (quotes: QuoteType[]) => {
    return (tag?: TagType) => {
        if (tag) {
            const filter = quotes.filter((lst) => lst.tag === tag);
            return _shuffle(filter);
        }
        return _shuffle(quotes);
    };
};

/**
 * 한국어로 된 명언 모음입니다.
 */
const quotes = data;
/**
 * 1-3까지의 태그타입을 인자로 넣으면 태그에 해당하는 명언 중 하나를 불러옵니다.
 * @function random(tag?: 1 | 2 | 3)
 *
 * const quote = random()
 *
 */
const random = _random(quotes);
/**
 * 1-3까지의 태그타입을 인자로 넣으면 태그에 해당하는 명언을 불러옵니다.
 *
 * @function get(tag?: 1 | 2 | 3)
 *
 * const quotes = get()
 */
const get = _get(quotes);

export { quotes, random, get };

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
export default { quotes, random, get };
