import { KadviceService } from '../KadviceService';
import { KadviceJsonModel, KadviceTagType } from '../models/kadvice.model';
import { getAdviceFixtures } from '../utils/getAdviceFixture';
import { getKadviceStorageService } from '../KadviceStorageService';

const MOCK_FIXTURE_DATA: KadviceJsonModel[] = [
  {
    author: 'Alice',
    authorProfile: 'Designer',
    message: 'This is message number 1.',
    tag: 1,
  },
  {
    author: 'Bob',
    authorProfile: 'Doctor',
    message: 'This is message number 2.',
    tag: 2,
  },
  {
    author: 'Charlie',
    authorProfile: 'Writer',
    message: 'This is message number 3.',
    tag: 3,
  },
  {
    author: 'David',
    authorProfile: 'Engineer',
    message: 'This is message number 4.',
    tag: 1,
  },
  {
    author: 'Eve',
    authorProfile: 'Manager',
    message: 'This is message number 5.',
    tag: 2,
  },
  {
    author: 'Frank',
    authorProfile: 'Teacher',
    message: 'This is message number 6.',
    tag: 3,
  },
  {
    author: 'Grace',
    authorProfile: 'Artist',
    message: 'This is message number 7.',
    tag: 1,
  },
  {
    author: 'Henry',
    authorProfile: 'Chef',
    message: 'This is message number 8.',
    tag: 2,
  },
  {
    author: 'Ivy',
    authorProfile: 'Designer',
    message: 'This is message number 9.',
    tag: 3,
  },
  {
    author: 'Jack',
    authorProfile: 'Doctor',
    message: 'This is message number 10.',
    tag: 1,
  },
];

describe('KadviceService', () => {
  const getAdviceFixturesMock: typeof getAdviceFixtures = vi.fn(
    (tagNumber?: KadviceTagType) => {
      let results: KadviceJsonModel[] = MOCK_FIXTURE_DATA;

      if (tagNumber) {
        results = MOCK_FIXTURE_DATA.filter(({ tag }) => tag === tagNumber);
      }

      return results;
    },
  );

  const STORAGE_COUNT_KEY = 'count';
  const STORAGE_MID_NIGHT_KEY = 'midNight';

  const localStorageMock: { [key: string]: string } = {};
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key: string) => {
    return localStorageMock[key] || null;
  });
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(
    (key: string, value: string) => {
      localStorageMock[key] = value;
    },
  );

  const KadviceStorageService = getKadviceStorageService(
    STORAGE_COUNT_KEY,
    STORAGE_MID_NIGHT_KEY,
  );

  let service = new KadviceService(
    getAdviceFixturesMock(),
    KadviceStorageService,
  );

  beforeEach(() => {
    delete localStorageMock[STORAGE_COUNT_KEY];
    delete localStorageMock[STORAGE_MID_NIGHT_KEY];

    service = new KadviceService(
      getAdviceFixturesMock(),
      KadviceStorageService,
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('명언 리스트를 모두 불러온다.', () => {
    const given = service.getAll();

    expect(given).toEqual(getAdviceFixturesMock());
  });

  it('특정 태그에 해당하는 명언 리스트를 모두 불러온다.', () => {
    const TAG_NUMBER = 1;

    const given = service.getAll(TAG_NUMBER);

    expect(given).toEqual(getAdviceFixturesMock(1));
  });

  it('명언 리스트 중 하나의 객체를 랜덤으로 불러온다.', () => {
    const given = service.getOne();

    const result = getAdviceFixturesMock().filter(
      ({ message }) => message === given.message,
    )[0];

    expect(given).toEqual(result);
  });

  it('특정 태그에 해당하는 명언 리스트 중 하나의 객체를 랜덤으로 불러온다.', () => {
    const TAG_NUMBER = 1;

    const given = service.getOne(TAG_NUMBER);

    const result = getAdviceFixturesMock()
      .filter(({ tag }) => tag === TAG_NUMBER)
      .filter(({ message }) => message === given.message)[0];

    expect(given).toEqual(result);
  });

  it('자정이 지나지 않으면 명언 리스트에서 현재 인덱스에 위치한 명언을 불러온다.', () => {
    const FAKE_MID_NIGHT_TIME = new Date().getTime() + 1000;
    localStorageMock[STORAGE_COUNT_KEY] = '0';
    localStorageMock[STORAGE_MID_NIGHT_KEY] = String(FAKE_MID_NIGHT_TIME);

    const given = service.getOneByDaily();
    const count = Number(localStorageMock[STORAGE_COUNT_KEY]);
    const result = getAdviceFixturesMock()[count];

    expect(count).toBe(0);
    expect(given).toEqual(result);
  });

  it('자정이 지나면 명언 리스트에서 현재 인덱스 다음 인덱스에 위치한 명언을 불러온다.', () => {
    const FAKE_MID_NIGHT_TIME = new Date().getTime() - 1000;
    localStorageMock[STORAGE_COUNT_KEY] = '0';
    localStorageMock[STORAGE_MID_NIGHT_KEY] = String(FAKE_MID_NIGHT_TIME);

    const given = service.getOneByDaily();
    const count = Number(localStorageMock[STORAGE_COUNT_KEY]);
    const result = getAdviceFixturesMock()[count];

    expect(count).toBe(1);
    expect(given).toEqual(result);
  });

  it('자정이 지나면 특정 태그에 해당하는 명언 리스트에서 다음 인덱스에 위치한 명언을 불러온다.', () => {
    const TAG_NUMBER = 1;
    const FAKE_MID_NIGHT_TIME = new Date().getTime() - 1000;
    localStorageMock[STORAGE_COUNT_KEY] = '0';
    localStorageMock[STORAGE_MID_NIGHT_KEY] = String(FAKE_MID_NIGHT_TIME);

    const given = service.getOneByDaily(TAG_NUMBER);
    const count = Number(localStorageMock[STORAGE_COUNT_KEY]);
    const result = getAdviceFixturesMock(TAG_NUMBER)[count];

    expect(count).toBe(1);
    expect(given).toEqual(result);
  });

  it('자정을 지날 때 준비된 명언 리스트 마지막 인덱스에 도달하면 다시 처음 인덱스로 초기화한다. ', () => {
    service = new KadviceService(
      getAdviceFixturesMock().slice(0, 1),
      KadviceStorageService,
    );

    const FAKE_MID_NIGHT_TIME = new Date().getTime() - 1000;
    localStorageMock[STORAGE_COUNT_KEY] = '1';
    localStorageMock[STORAGE_MID_NIGHT_KEY] = String(FAKE_MID_NIGHT_TIME);

    const given = service.getOneByDaily();
    const count = Number(localStorageMock[STORAGE_COUNT_KEY]);
    const result = getAdviceFixturesMock()[count];

    expect(count).toBe(0);
    expect(given).toEqual(result);
  });

  it('자정을 지날 때 준비된 특정 태그의 명언 리스트 마지막 인덱스에 도달하면 다시 처음 인덱스로 초기화한다.', () => {
    const TAG_NUMBER = 1;
    service = new KadviceService(
      getAdviceFixturesMock(TAG_NUMBER).slice(0, 1),
      KadviceStorageService,
    );

    const FAKE_MID_NIGHT_TIME = new Date().getTime() - 1000;
    localStorageMock[STORAGE_COUNT_KEY] = '1';
    localStorageMock[STORAGE_MID_NIGHT_KEY] = String(FAKE_MID_NIGHT_TIME);

    const given = service.getOneByDaily(TAG_NUMBER);
    const count = Number(localStorageMock[STORAGE_COUNT_KEY]);
    const result = getAdviceFixturesMock()[count];

    expect(count).toBe(0);
    expect(given).toEqual(result);
  });
});
