import { data } from "./data";
import { AdviceType, Init, TagType } from "../@types/type";

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

const init = (): Init => {
    const advices = data;

    const daily = (tag?: TagType): AdviceType => {
        const dailyAdvices = tag
            ? advices.filter((lst) => lst.tag === tag)
            : advices;

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

            if (dailyAdvices[cnt + 1]) {
                _setStorage("cnt", cnt + 1);
                return dailyAdvices[cnt + 1];
            }

            _setStorage("cnt", 0);
            return dailyAdvices[0];
        }

        return dailyAdvices[cnt];
    };

    const get = (tag?: TagType): AdviceType[] => {
        if (tag) {
            return advices.filter((lst) => lst.tag === tag);
        }
        return advices;
    };

    const random = (tag?: TagType): AdviceType => {
        if (tag) {
            const filter = advices.filter((lst) => lst.tag === tag);
            return _shuffle(filter);
        }
        return _shuffle(advices);
    };

    return { random, get, daily };
};

export const { random, get, daily } = init();

export default init();
