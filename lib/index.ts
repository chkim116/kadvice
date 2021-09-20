import { data } from "./data";
import { AdviceType, TagType } from "../@types/type";

const _shuffle = (array: AdviceType[]) => {
    return array[Math.floor(Math.random() * array.length)];
};

const _getStorage = (key: string): string | number | null => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key) as any);
    } else {
        return null;
    }
};

const _setStorage = (key: string, value: string | number) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const init = () => {
    const advices = data;

    const daily = () => {
        let cnt = _getStorage("cnt") as number;
        let midNight = _getStorage("midnight");
        let curTime = new Date().getTime();

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

            if (advices[cnt + 1]) {
                _setStorage("cnt", cnt + 1);
                return advices[cnt + 1];
            }

            _setStorage("cnt", 0);
            return advices[0];
        }

        return advices[cnt];
    };

    const get = (tag?: TagType) => {
        if (tag) {
            return advices.filter((lst) => lst.tag === tag);
        }
        return advices;
    };

    const random = (tag?: TagType) => {
        if (tag) {
            const filter = advices.filter((lst) => lst.tag === tag);
            return _shuffle(filter);
        }
        return _shuffle(advices);
    };

    return { random, get, daily };
};

export const { random, get, daily } = init();

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
export default { random, get, daily };
