export type KadviceTagType = 1 | 2 | 3;

export enum KadviceTagEnum {
  /**
   * 삶에 대한 명언
   */
  LIFE = 1,
  /**
   * 동기부여에 대한 명언
   */
  MOTIVATION = 2,
  /**
   * 기타
   */
  ETC = 3,
}

export interface KadviceJsonModel {
  /**
   * 말한 사람의 이름
   */
  author: string;
  /**
   * 말한 사람의 직업 or 별칭
   */
  authorProfile: string;
  /**
   * 내용
   */
  message: string;
  /**
   * 주제에 따른 태그 번호
   *
   * @see KadviceTagType
   */
  tag: KadviceTagType;
}

export interface KadviceServiceModel {
  /**
   *
   * 명언 리스트를 불러온다.
   *
   * @param tag
   * @example
   * ```
   * const advices = kadvice.get(); // KadviceJsonModel[]
   * // tag에 따라 명언의 유형을 달리 불러올 수 있다.
   * const advices = kadvice.get(1); // KadviceJsonModel[]
   * ```
   */
  getAll: (tag?: KadviceTagType) => KadviceJsonModel[];
  /**
   * @deprecated `getAll` 사용
   */
  get: (tag?: KadviceTagType) => KadviceJsonModel[];
  /**
   *  명언 객체 배열 중 하나의 객체를 랜덤으로 불러온다.
   *
   * @param tag
   * @example
   * ```
   * const advices = kadvice.random(); // => KadviceJsonModel
   *
   * // tag에 따라 명언의 유형을 달리 불러올 수 있다.
   * const advices = kadvice.random(1); // => KadviceJsonModel
   * ```
   */
  getOne: (tag?: KadviceTagType) => KadviceJsonModel;
  /**
   * @deprecated `getOne` 사용
   */
  random: (tag?: KadviceTagType) => KadviceJsonModel;
  /**
   *
   * 한국 시간 기준, 명언을 매일 자정마다 하나씩 불러온다.
   * 리스트 전체를 순회하며, 마지막에 도달하면 다시 처음부터 순회한다.
   * 'cnt'와 'midnight'을 localStorage의 key로 사용합니다.
   *
   * @param tag
   * ```
   * const dailyAdvice = kadvice.daily(); // AdviceType
   *
   * // tag에 따라 명언의 유형을 달리 불러올 수도 있습니다.
   * const dailyAdvice = kadvice.daily(1);
   * ```
   */
  getOneByDaily: (tag?: KadviceTagType) => KadviceJsonModel;
  /**
   * @deprecated `getOneByDaily` 사용
   */
  daily: (tag?: KadviceTagType) => KadviceJsonModel;
}
