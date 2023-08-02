export interface KadviceStorageServiceModel {
  /**
   * @params max - 최대 인덱스
   * @returns index - 현재 표시될 인덱스
   */
  getCurrentAdviceIndex: (max: number) => number;
}

export class KadviceStorageService implements KadviceStorageServiceModel {
  constructor(
    private countKey: string = 'count',
    private midNightKey: string = 'midNight',
  ) {}

  getCurrentAdviceIndex(max: number) {
    const [count, midNight] = this.initializeCountAndMidnightKeys();
    const currentTime = new Date().getTime();

    if (currentTime >= midNight) {
      this.setStorage(this.midNightKey, this.getCurrentMidNightTime());

      const nextCount = count + 1;

      if (max >= nextCount) {
        this.setStorage(this.countKey, nextCount);
        return nextCount;
      }

      this.setStorage(this.countKey, 0);
      return 0;
    }

    return 0;
  }

  private initializeCountAndMidnightKeys() {
    const countKey = this.countKey;
    const midNightKey = this.midNightKey;

    let count = this.getStorage(countKey);
    let midNight = this.getStorage(midNightKey);

    if (count === null) {
      count = 0;
      this.setStorage(countKey, 0);
    }

    if (midNight === null) {
      midNight = this.getCurrentMidNightTime();
      this.setStorage(midNightKey, this.getCurrentMidNightTime());
    }

    return [count, midNight];
  }

  private getCurrentMidNightTime() {
    return new Date().setHours(24, 0, 0, 0);
  }

  private getStorage(key: string) {
    const value = localStorage.getItem(key);

    if (value) {
      try {
        return Number(JSON.parse(value));
      } catch (err) {
        return null;
      }
    }

    return null;
  }

  private setStorage(key: string, value: number) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

let instance: KadviceStorageService | null = null;
export function getKadviceStorageService(
  cntKey?: string,
  midNightKey?: string,
) {
  if (instance) {
    return instance;
  }

  instance = new KadviceStorageService(cntKey, midNightKey);

  return instance;
}
