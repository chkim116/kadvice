import { QuoteType, TagType } from "../@types/type";
/**
 * 한국어로 된 명언 모음입니다.
 */
declare const quotes: QuoteType[];
/**
 * 1-3까지의 태그타입을 인자로 넣으면 태그에 해당하는 명언 중 하나를 불러옵니다.
 * @function random(tag?: 1 | 2 | 3)
 *
 * const quote = random()
 *
 */
declare const random: (tag?: TagType | undefined) => QuoteType;
/**
 * 1-3까지의 태그타입을 인자로 넣으면 태그에 해당하는 명언을 불러옵니다.
 *
 * @function get(tag?: 1 | 2 | 3)
 *
 * const quotes = get()
 */
declare const get: (tag?: TagType | undefined) => QuoteType[];
export { quotes, random, get };
declare const _default: {
    quotes: QuoteType[];
    random: (tag?: TagType | undefined) => QuoteType;
    get: (tag?: TagType | undefined) => QuoteType[];
};
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
export default _default;
