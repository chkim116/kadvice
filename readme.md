# 한국어로 된 명언

한국어로 번역된 명언 모음집입니다. 영어의 고통에서 해방되세요.

<br />

현재 100여개의 명언이 수록되어 있고 삶, 동기부여와 관련된 명언이 90%입니다.
<br />
명언은 꾸준히 업데이트 될 예정이며 너무 많아지게 될시엔 api로 전환할 예정입니다.
<br />

명언 추가나, 원하시는 기능이 있으시면 [이슈](https://github.com/chkim116/kadvice/issues)에 등록해 주세요.
<br />

## 설치

```js
npm i kadvice

// or

yarn add kadvice
```

## 타입

-   명언 리스트의 객체는 다음와 같은 형식가지고 있습니다.

```typescript
{
    author: string;
    authorProfile: string;
    message: string;
    tag: 1 | 2 | 3;
}
```

-   author : 말한 사람의 이름.
-   authorProfile : 말한 사람의 직업 or 별칭.
-   message : 내용.
-   tag : 주제에 따른 태그 번호. 1 = 삶 관련, 2 = 동기부여 관련, 3 = 기타

## 사용

```js
import kadvice from "kadvice";

const advices = kadvice.get();
const advice = kadvice.random();
const dailyAdvice = kadvice.daily();

// or

import { get, random, daily } from "kadvice";

const advices = get();
const advice = random();
const dailyAdvice = daily();
```

## 함수

### 1. get()

-   get() 함수는 명언 리스트를 반환합니다. (배열을 반환)
-   get 함수는 1 | 2 | 3을 인자로 받을 수 있습니다.

#### example

```js
const advices = kadvice.get();

// or

const lifeAdvices = kadvice.get(1);
```

### 2. random()

-   random() 함수는 명언 리스트 중 하나를 랜덤으로 반환 합니다. (객체를 반환)
-   random 함수는 1 | 2 | 3을 인자로 받을 수 있습니다.

#### example

```js
const advice = kadvice.random();

// or

const lifeAdvice = kadvice.random(1);
```

### 3. daily()

-   daily() 함수는 매일 자정에 새로운 명언을 반환합니다.
-   daily 함수는 1 | 2 | 3을 인자로 받을 수 있습니다.
-   로컬스토리지를 활용하며, cnt와 midnight을 key로 사용합니다.

#### example

```js
const daily = kadvice.daily();
```

리액트에선 다음과 같이 활용하세요.

```js
const [dailyAdvice, setDailyAdvice] = useState(null);

useEffect(() => {
    setDailyAdvice(kadvice.daily());
}, []);
```
