export type TagType = 1 | 2 | 3;
export type AdviceType = {
    author: string;
    authorProfile: string;
    message: string;
    tag: TagType;
};

export type Init = {
    /**
     *
     * 명언 리스트를 불러옵니다.
     *
     * ```
     * const advices = kadvice.get(); // AdviceType[]
     * ```
     *
     * ---
     *
     * tag에 따라 명언의 유형을 달리 불러올 수도 있습니다.
     *
     * @param tag
     *
     * ```
     * const advices = kadvice.get(1);
     * ```
     *
     */
    get: (tag?: TagType) => AdviceType[];

    /**
     *
     *  명언 리스트 중 하나를 랜덤으로 불러옵니다.
     *
     * ```
     * const advices = kadvice.random(); // => AdviceType
     * ```
     *
     * ---
     *
     * tag에 따라 명언의 유형을 달리 불러올 수도 있습니다.
     *
     * @param tag
     *
     * ```
     * const advices = kadvice.random(1);
     * ```
     *
     */
    random: (tag?: TagType) => AdviceType;

    /**
     *
     * 명언을 매일 자정마다 하나씩 불러옵니다.
     *
     * 리스트 전체를 순회하며, 마지막에 도달하면 다시 처음부터 순회합니다.
     *
     * 'cnt'와 'midnight'을 localStorage의 key로 사용합니다.
     *
     * ```
     * const dailyAdvice = kadvice.daily(); // AdviceType
     * ```
     *
     * ---
     *
     * tag에 따라 명언의 유형을 달리 불러올 수도 있습니다.
     *
     * @param tag
     *
     * ```
     * const dailyAdvice = kadvice.daily(1);
     * ```
     *
     */
    daily: (tag?: TagType) => AdviceType;
};
