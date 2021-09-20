import { AdviceType } from "../@types/type";
export declare const random: (tag?: 1 | 2 | 3 | undefined) => AdviceType, get: (tag?: 1 | 2 | 3 | undefined) => AdviceType[], daily: () => AdviceType;
declare const _default: {
    random: (tag?: 1 | 2 | 3 | undefined) => AdviceType;
    get: (tag?: 1 | 2 | 3 | undefined) => AdviceType[];
    daily: () => AdviceType;
};
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
export default _default;
