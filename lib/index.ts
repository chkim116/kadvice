import { data } from "./data";
import { QuoteType, TagType } from "../@types/type";

const init = () => {
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

    const quotes = data;
    const random = _random(quotes);
    const get = _get(quotes);

    return { random, get };
};

export const { random, get } = init();

/**
 * 한국어로 된 명언 모음입니다.
 *
 * ---
 * 기본 형식은 다음과 같습니다.
 * @function get(tag?: 1 | 2 | 3)
 *
 * const quotes = kadvice.get();
 *
 * tag 번호에 따라 명언의 유형을 달리 불러올 수도 있습니다.
 *
 * const quotes = kadvice.get(1);
 *
 *  ---
 *
 * random() 함수는 기본적으로 하나를 랜덤으로 불러옵니다.
 * @function random(tag?: 1 | 2 | 3)
 *
 * const quote = kadvice.random();
 *
 * tag 번호에 따라 해당하는 태그의 명언 중 하나를 갖고 올 수도있습니다.
 *
 * const quote = kadvice.random(1);
 */
export default { random, get };
