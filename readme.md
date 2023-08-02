# Kadvice

## ⚡️ Fixtures

한국어 기반 명언 모음집입니다. 영어의 고통에서 해방되세요.

- 💡 한국어 기반 명언 모음집
- 🛠️ 필요에 따라 명언 모음을 변경할 수 있는 커스터마이징 기능
- 🔩 7KB의 작은 용량 (Gzip 기준)
- 🔑 TypeScript 완벽 지원
- 📦 삶과 동기부여 등에 대한 100여개의 명연

## 🌐 Demo

[데모 보러가기](https://chkim116.github.io/kadvice-demo/)
[명언 리스트 보기](https://github.com/chkim116/kadvice/blob/master/scripts/fixtures/)

## 📦 Install

```js
npm i kadvice

// or

yarn add kadvice
```

## ⌨️ Type

| 타입명        | 타입          | 설명                                                           |
| ------------- | ------------- | -------------------------------------------------------------- |
| author        | string        | 말한 사람의 이름                                               |
| authorProfile | string        | 말한 사람의 직업 or 별칭                                       |
| message       | string        | 말한 내용                                                      |
| tag           | `1`, `2`, `3` | 주제에 따른 태그 번호.1 = 삶 관련, 2 = 동기부여 관련, 3 = 기타 |

## 🔨 Usage

```js
import { kadvice } from 'kadvice';

const advices = kadvice.getAll();
const advice = kadvice.getOne();
const dailyAdvice = kadvice.getOneByDaily();
```

## 🗃️ API

### 1. getAll()

- `getAll()` 함수는 전체 명언 리스트를 반환합니다. (배열을 반환)
- `getAll` 함수는 1 | 2 | 3을 인자로 받아 특정 태그의 전체 명언 리스트를 반환합니다.

#### Example

```js
const advices = kadvice.getAll();

// or

const lifeAdvices = kadvice.getAll(1);
```

---

### 2. getOne()

- `getOne()` 함수는 명언 리스트 중 하나를 랜덤으로 반환 합니다. (객체를 반환)
- `getOne` 함수는 1 | 2 | 3을 인자로 받아 특정 태그의 명언 리스트 중 하나를 랜덤으로 반환합니다.

#### Example

```js
const advice = kadvice.getOne();

// or

const lifeAdvice = kadvice.getOne(1);
```

---

### 3. getOneByDaily()

- `daily()` 함수는 매일 자정에 새로운 명언을 반환합니다.
- `daily` 함수는 1 | 2 | 3을 인자로 받아 특정 태그의 명언을 반환합니다.
- 내부적으로 로컬스토리지를 활용하며, `count`와 `midNight`을 key로 사용합니다.

#### Example

```js
const daily = kadvice.getOneByDaily();

or;

const daily = kadvice.getOneByDaily(1);
```

리액트에선 다음과 같이 활용하세요.

```js
const [dailyAdvice, setDailyAdvice] = kadvice.getOne();

const handleClick = () => {
  setDailyAdvice(kadvice.getOne());
};
```

## Customizing

- 커스터마이징 기능을 지원합니다.

```tsx
import { KadviceService, KadviceStorageService } from "kadvice";

const sampleJson: KadviceJsonModel[] = [
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
  // ...etc
];

function getCustomAdvice() {
  return new KadviceService(sampleJson, new KadviceStorageService()));
}

const kadvice = getCustomAdvice();
```

- 원하는 명언을 추가할 수 있습니다.

```tsx
import { KadviceService, KadviceStorageService, getAdviceFixtures } from "kadvice";

const sampleJson: KadviceJsonModel[] = [
  ...getAdviceFixtures(),
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
  // ...etc
];

function getCustomAdvice() {
  return new KadviceService(sampleJson, new KadviceStorageService()));
}

const kadvice = getCustomAdvice();
```

- 원하는 localStorage key로 변경할 수 있습니다.

```tsx
function getCustomAdvice() {
  return new KadviceService(sampleJson, new KadviceStorageService('customCountKey', 'customMidNightKey')));
}

const kadvice = getCustomAdvice();

```
