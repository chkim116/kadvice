//  1 = 삶 2 = 동기부여 3 = 기타
import { AdviceType } from "../@types/type";

// 기타
const etc: AdviceType[] = [
    {
        author: "에이브러햄 링컨",
        authorProfile: "미국 16대 대통령",
        message:
            "만약 당신이 누군가의 인격을 시험해 보고 싶다면, 그에게 권력을 줘 보라.",
        tag: 3,
    },
    {
        author: "루드비히 비트겐슈타인",
        authorProfile: "철학자",
        message: "말할 수 없는 것에 대해서는 침묵해야 한다.",
        tag: 3,
    },
    {
        author: "볼테르",
        authorProfile: "작가",
        message: "사람들은 할 말이 없으면 욕을 한다.",
        tag: 3,
    },
    {
        author: "프리드리히 니체",
        authorProfile: "철학자",
        message: "한낱 빛 따위가 어찌 어둠을 알 랴.",
        tag: 3,
    },
    {
        author: "스티브 잡스",
        authorProfile: "애플의 창업자",
        message: "창조란 모든 것을 연결하는 것이다.",
        tag: 3,
    },
    {
        author: "구인회",
        authorProfile: "LG그룹의 창업자",
        message: "한 번 사람을 믿으면 모두 맡기십시오.",
        tag: 3,
    },
    {
        author: "파블로 피카소",
        authorProfile: "화가",
        message: "좋은 예술가는 베끼고, 훌륭한 예술가는 훔친다.",
        tag: 3,
    },
    {
        author: "알렉스 퍼거슨",
        authorProfile: "축구 감독",
        message: "트위터는 인생의 낭비다. 인생에선 더 많은 것들을 할 수 있다.",
        tag: 3,
    },
    {
        author: "마크 트웨인",
        authorProfile: "작가",
        message:
            "10월, 주식 투자에 특히 위험한 달 중 하나다. 다른 위험한 달로는 7월, 1월, 9월, 4월, 11월, 5월, 3월, 6월, 12월, 8월, 그리고 2월이 있다.",
        tag: 3,
    },
    {
        author: "증권 시장의 격언",
        authorProfile: "-",
        message: "골이 깊으면 산도 높다.",
        tag: 3,
    },
];

// 동기부여
const motivation: AdviceType[] = [
    {
        author: "공자",
        authorProfile: "유학자, 세계 4대 성인",
        message:
            "가장 큰 영광은 한 번도 실패하지 않음이 아니라, 실패할 때마다 다시 일어서는데 있다.",
        tag: 2,
    },
    {
        author: "토마스 제퍼슨",
        authorProfile: "미국 3대 대통령",
        message: "나는 내가 더 노력할 수록 운이 더 좋아진다는 것을 발견했다.",
        tag: 2,
    },
    {
        author: "무라카미 하루키",
        authorProfile: "작가",
        message: "희망이 있는 곳에 반드시 시련이 있는 법이다.",
        tag: 2,
    },
    {
        author: "윈스턴 처칠",
        authorProfile: "영국 총리",
        message: "지옥을 겪고 있다면 계속 겪어 나가라.",
        tag: 2,
    },
    {
        author: "헨리 클레이",
        authorProfile: "정치인, 위대한 중재자",
        message:
            "겨울이 당신에게 여름 내내 무얼 했느냐 묻는 날이 꼭 올 것이다.",
        tag: 2,
    },
    {
        author: "앨런 케이",
        authorProfile: "컴퓨터과학자, OOP의 선구자",
        message: "미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.",
        tag: 2,
    },
    {
        author: "헬렌 켈러",
        authorProfile: "인문계 학사를 받은 최초의 시청각 장애인",
        message:
            "나는 폭풍이 두렵지 않다. 나는 배로 항해 하는 법을 배우고 있으니까.",
        tag: 2,
    },
    {
        author: "월트 디즈니",
        authorProfile: "월트 디즈니 컴퍼니 창업자",
        message:
            "우리의 모든 꿈은 이루어질 것이다. 그들을 믿고 나갈 용기만 있다면",
        tag: 2,
    },
    {
        author: "벤자민 프랭클린",
        authorProfile: "정치인, 미국 건국의 아버지",
        message: "해야할 일은 과감히 하라. 결심한 일은 반드시 실행하라.",
        tag: 2,
    },
    {
        author: "그렉 S 리드",
        authorProfile: "작가",
        message:
            "꿈을 날짜와 함께 적어 놓으면 목표가 되고, 목표를 잘게 나누면 계획이 되며, 계획을 실행에 옮기면 꿈은 실현되는 것이다.",
        tag: 2,
    },
    {
        author: "윈스턴 처칠",
        authorProfile: "영국 총리",
        message: "절대로, 절대로, 절대로, 절대로 포기하지 마라.",
        tag: 2,
    },
    {
        author: "프란츠 베켄바우어",
        authorProfile: "축구 선수, 리베로의 창시자",
        message: "강한 자가 이기는 것이 아니라, 이긴 자가 강한 것이다.",
        tag: 2,
    },
    {
        author: "박명수",
        authorProfile: "코미디언",
        message:
            "늦었다고 생각할 때가 진짜 너무 늦었다. 그러니 지금 당장 시작해라.",
        tag: 2,
    },
    {
        author: "리오넬 메시",
        authorProfile: "축구 선수, 발롱도르 최다 수상자",
        message: "모든 단점은, 장점이 될 수 있다.",
        tag: 2,
    },
    {
        author: "문호준",
        authorProfile: "카트라이더 프로게이머",
        message: "목표는 당연히 우승이죠. 저는 준우승을 모릅니다.",
        tag: 2,
    },
    {
        author: "존 A. 쉐드",
        authorProfile: "교육자",
        message:
            "항구에 정박해 있는 배는 안전하다. 그러나 그것이 배의 존재 이유는 아니다.",
        tag: 2,
    },
    {
        author: "김병만",
        authorProfile: "달인",
        message: "안 해 봤으면 말을 하지 마세요.",
        tag: 2,
    },
    {
        author: "헤르만 헤세",
        authorProfile: "작가, <데미안>의 저자",
        message:
            "말로 갈 수도, 차로 갈 수도, 둘이서 갈 수도, 셋이서 갈 수도 있다. 하지만 맨 마지막 한 걸음은 자기 혼자서 걷지 않으면 안된다.",
        tag: 2,
    },
    {
        author: "레프 톨스토이",
        authorProfile: "작가, 러시아의 대문호",
        message:
            "모두가 세상을 변화시키려 하지만, 정작 스스로 변하겠다고 생각하는 사람은 없다.",
        tag: 2,
    },
    {
        author: "조지 패튼",
        authorProfile: "미국의 장군",
        message: "용기란 공포를 1분 더 참는 것이다.",
        tag: 2,
    },
    {
        author: "풀러",
        authorProfile: "학자",
        message: "일이 불가능하다고 믿는 것은 일을 불가능하게 하는 일이다.",
        tag: 2,
    },
    {
        author: "카를로스 곤",
        authorProfile: "브라질의 기업인",
        message: "아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다.",
        tag: 2,
    },
    {
        author: "워렌 버핏",
        authorProfile: "버크셔 해서웨이 CEO, 오마하의 현인",
        message:
            "잠자는 동안에도 돈이 들어오는 방법을 찾지 못한다면, 당신은 죽을 때까지 일을 해야만 할 것이다.",
        tag: 2,
    },
    {
        author: "프리드리히 니체",
        authorProfile: "철학자",
        message: "나를 죽이지 못하는 것은 나를 강하게 만든다.",
        tag: 2,
    },
    {
        author: "일론 머스크",
        authorProfile: "스페이스X 창업자, 테슬라 CEO",
        message:
            "실패는 옵션이다. 실패하지 않는다면, 당신은 충분한 혁신을 이룰 수 없다.",
        tag: 2,
    },
    {
        author: "드류 휴스턴",
        authorProfile: "드롭박스 공동 창업자",
        message: "실패에 대해 걱정하지 마라. 한번만 제대로 하면 된다.",
        tag: 2,
    },
    {
        author: "래리 앨리슨",
        authorProfile: "오라클 CEO",
        message:
            "혁신을 할 때는 모든 사람들이 당신을 미쳤다고 할 테니, 그들 말에 준비가 되어 있어야 한다.",
        tag: 2,
    },
    {
        author: "빌 게이츠",
        authorProfile: "마이크로소프트 창업자",
        message:
            "내가 가난하게 태어났다면, 결코 내 탓이 아니다. 하지만 만약 내가 가난하게 세상을 떠난다면, 모두 내 잘못이다.",
        tag: 2,
    },
    {
        author: "셰익스피어",
        authorProfile: "극작가, 역사상 가장 위대한 작가",
        message: "'지금이 최악'이라고 말할 힘이 있다면 아직 최악은 아니다.",
        tag: 2,
    },
    {
        author: "김수영",
        authorProfile: "작가",
        message:
            "당신을 가로막는 장애때문에 포기할 것인가, 반대로 그 장애를 넘어서기 위해 노력할 것인가는 당신이 선택할 문제다.",
        tag: 2,
    },
    {
        author: "괴테",
        authorProfile: "작가, 독일의 가장 위대한 문인",
        message:
            "아는 것만으로는 충분하지 않다. 적용해야만 한다. 의지만으로 충분하지 않다. 실행해야 한다.",
        tag: 2,
    },
    {
        author: "존 F. 케네디",
        authorProfile: "미국 35대 대통령",
        message:
            "당신이 자신은 2위로 만족한다고 일단 말하면, 당신의 인생은 그렇게 되기 마련이라는 것을 나는 깨달았다.",
        tag: 2,
    },
    {
        author: "톰 매너한",
        authorProfile: "도미노피자 창업자",
        message:
            "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        tag: 2,
    },
    {
        author: "정주영",
        authorProfile: "현대그룹의 창업자",
        message: "시련은 있어도 실패는 없다.",
        tag: 2,
    },
    {
        author: "정주영",
        authorProfile: "현대그룹의 창업자",
        message: "이봐 해봤어?",
        tag: 2,
    },
    {
        author: "덴젤 워싱턴",
        authorProfile: "영화 배우",
        message:
            "살기 위해 열정을 쏟지 마라. 다름을 만들기 위해 열정을 사용해라.",
        tag: 2,
    },
    {
        author: "덴젤 워싱턴",
        authorProfile: "영화 배우",
        message: "실패를 하지 않는다면 너는 시도조차 하지 않는 것이다.",
        tag: 2,
    },
    {
        author: "마이클 조던",
        authorProfile: "농구 황제",
        message: "진정한 성공에 지름길은 없다.",
        tag: 2,
    },
    {
        author: "일론 머스크",
        authorProfile: "스페이스X 창업자, 테슬라 CEO",
        message: "정말 중요한 일이라면 역경이 닥쳐도 그 일을 계속해야 합니다.",
        tag: 2,
    },
    {
        author: "일론 머스크",
        authorProfile: "스페이스X 창업자, 테슬라 CEO",
        message:
            "당신이 할 수 있는 만큼 정말로 열심히 일하세요. 적어도 일주일에 80-100시간 가량 투자해야 합니다. 그게 성공에 가까이 가는 지름길입니다.",
        tag: 2,
    },
    {
        author: "유재석",
        authorProfile: "코미디언, 국민 MC",
        message:
            "내가 생각하는 범위에서 최선을 다하면 안돼. 그걸 벗어나서 최선을 다해야지 그게 '혼신'이야.",
        tag: 2,
    },
    {
        author: "김연아",
        authorProfile: "피겨여왕, 21세기 여자 피겨 최고의 선수",
        message:
            "이걸 잘하자! 이걸 하고 나면 그 다음.. 그리고 그 다음.. 그렇게 눈앞에 보이는 지점에 집중했어요.",
        tag: 2,
    },
    {
        author: "아멜리아 에어하트",
        authorProfile: "파일럿, 여성 최초 대서양 횡비행",
        message:
            "다른 사람들이 할 수 있거나 할 일을 하지 말고, 다른 이들이 할 수 없고 하지 않을 일들을 하라.",
        tag: 2,
    },
    {
        author: "익명",
        authorProfile: "-",
        message: "라고 할때 할걸",
        tag: 2,
    },
    {
        author: "마크 주커버그",
        authorProfile: "페이스북의 창업자",
        message:
            "시작할 때는 아무도 모릅니다. 실행하는 과정을 통해 명확해집니다. 일단 시작하는 게 중요합니다.",
        tag: 2,
    },
    {
        author: "파블로 피카소",
        authorProfile: "작가",
        message: "마치지 않고 죽어도 되는 일만 내일로 미뤄라.",
        tag: 2,
    },
    {
        author: "지그 지글러",
        authorProfile: "동기부여 연설가",
        message:
            "사람들이 동기 부여는 오래가지 않는다고 말한다. 목욕도 마찬가지다. 그래서 매일 하라고 하는 것이다.",
        tag: 2,
    },
    {
        author: "오프라 윈프리",
        authorProfile: "방송인, 흑인 여성 중 가장 성공한 인물 중 한명",
        message:
            "중요한 질문은 '당신이 얼마나 바쁜가?'가 아니다. '당신이 무엇에 바쁜가'가 핵심 질문이다.",
        tag: 2,
    },
];

// 삶의 자세
const life: AdviceType[] = [
    {
        author: "빌 게이츠",
        authorProfile: "마이크로소프트 창업자",
        message: "인생이란 결코 공평하지 않다. 이 사실에 익숙해져라.",
        tag: 1,
    },
    {
        author: "우디 알렌",
        authorProfile: "영화 감독",
        message: "인생은 끔찍하거나 비참하거나 둘 중 하나다.",
        tag: 1,
    },
    {
        author: "캐롤 버넷",
        authorProfile: "영화 배우",
        message:
            "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 해줄 수 없다.",
        tag: 1,
    },
    {
        author: "벤자민 프랭클린",
        authorProfile: "정치인, 미국 건국의 아버지",
        message:
            "긴 인생은 충분히 좋지 않을 수 있다. 그러나 좋은 인생은 충분히 길다.",
        tag: 1,
    },
    {
        author: "찰리 채플린",
        authorProfile: "영화 배우",
        message: "인생은 가까이서 보면 비극, 멀리서 보면 희극이다.",
        tag: 1,
    },
    {
        author: "에이브러햄 링컨",
        authorProfile: "미국 16대 대통령",
        message:
            "반드시 이겨야 하는 건 아니지만 진실할 필요는 있다. 반드시 성공해야 하는 건 아니지만, 소신을 가지고 살아야 할 필요는 있다.",
        tag: 1,
    },
    {
        author: "아인슈타인",
        authorProfile: "물리학자, 상대성이론의 창시자",
        message:
            "삶을 사는 방식에는 오직 두 가지가 있다. 하나는 모든 것을 기적이라고 믿는 것, 그리고 다른 하나는 기적은 없다고 믿는 것이다.",
        tag: 1,
    },
    {
        author: "단테",
        authorProfile: "작가, 이탈리아어의 아버지",
        message: "가장 지혜로운 자는 허송세월을 가장 슬퍼한다.",
        tag: 1,
    },
    {
        author: "빅토르 위고",
        authorProfile: "작가, <레미제라블>의 저자",
        message: "궁핍은 영혼과 정신을 낳고, 불행은 위대한 인물을 낳는다.",
        tag: 1,
    },
    {
        author: "블레즈 파스칼",
        authorProfile: "수학자, 계산기의 발명자",
        message:
            "결점이 많다는 것은 나쁜 것이지만, 그것을 인정하지 않는 것은 더 나쁜 것이다.",
        tag: 1,
    },
    {
        author: "제임스 보즈웰",
        authorProfile: "작가",
        message:
            "문제는 어떻게 죽느냐가 아니고 어떻게 사느냐이다. 죽음 자체는 중요하지 않다. 그것은 한순간의 일이다.",
        tag: 1,
    },
    {
        author: "생텍쥐페리",
        authorProfile: "작가, <어린왕자>의 저자",
        message: "산다는 것은 서서히 태어나는 것이다.",
        tag: 1,
    },
    {
        author: "나폴레옹",
        authorProfile: "군인, 프랑스의 황제",
        message: "살아 있는 졸병이 죽은 황제보다 훨씬 가치가 있다.",
        tag: 1,
    },
    {
        author: "롤리 다스칼",
        authorProfile: "리더십 코치",
        message: "인생이란 자신을 찾는 것이 아니라 자신을 만드는 것이다.",
        tag: 1,
    },
    {
        author: "드와이트 아이젠하워",
        authorProfile: "미국 34대 대통령",
        message:
            "네가 좋아하지 않는 사람들을 생각하는데 단 1분도 허비하지 마라.",
        tag: 1,
    },
    {
        author: "소포클레스",
        authorProfile: "극작가",
        message:
            "당신이 헛되이 보낸 오늘은 어제 죽은 이가 그토록 갈망하던 내일이다.",
        tag: 1,
    },
    {
        author: "스티브 잡스",
        authorProfile: "애플 창업자",
        message: "늘 갈망하고 우직하게 나아가라.",
        tag: 1,
    },
    {
        author: "소크라테스",
        authorProfile: "철학자",
        message: "반성되지 않는 삶은 인간으로서 살 가치가 없다.",
        tag: 1,
    },
    {
        author: "공자",
        authorProfile: "유학자, 세계 4대 성인",
        message: "삶도 모르는데 어찌 죽음을 알겠는가?",
        tag: 1,
    },
    {
        author: "에르빈 롬멜",
        authorProfile: "독일의 장군, 사막의 여우",
        message: "세상이 널 버렸다고 생각하지마라. 세상은 널 가진 적이 없다.",
        tag: 1,
    },
    {
        author: "벤자민 프랭클린",
        authorProfile: "정치인, 미국 건국의 아버지",
        message: "시간은 돈이라는 사실을 명심하세요.",
        tag: 1,
    },
    {
        author: "루트비히 비트겐슈타인",
        authorProfile: "철학자",
        message: "언어의 한계가 곧 자기 세계의 한계다.",
        tag: 1,
    },
    {
        author: "이상",
        authorProfile: "작가",
        message: "인생은 실험이 아니라 실행이다.",
        tag: 1,
    },
    {
        author: "레프 톨스토이",
        authorProfile: "작가, 러시아의 대문호",
        message: "일하지 않는 자나 부자나 가난한 자나 모두 쓸모있는 사람이다.",
        tag: 1,
    },
    {
        author: "블레즈 파스칼",
        authorProfile: "수학자, 계산기의 발명자",
        message: "불행의 원인은 늘 자신에게 있다.",
        tag: 1,
    },
    {
        author: "칼 힐티",
        authorProfile: "사상가, 법률가",
        message: "뒤돌아 보지 마라. 중요한 것은 미래다.",
        tag: 1,
    },
    {
        author: "스탕달",
        authorProfile: "작가",
        message: "사랑 받기 보다는 사랑하는 사람이 되어라.",
        tag: 1,
    },
    {
        author: "프리드쇼프 난센",
        authorProfile: "탐험가",
        message: "인생에서 가장 중요한 일은 자기를 발견하는 것이다.",
        tag: 1,
    },
    {
        author: "프리드리히 니체",
        authorProfile: "철학자",
        message:
            "괴물과 싸우는 사람은 스스로 괴물이 되지 않도록 조심해야 한다. 우리가 괴물의 심연을 오래 들여다보면, 심연 또한 우리를 들여다 본다.",
        tag: 1,
    },
    {
        author: "레스 브라운",
        authorProfile: "동기부여 연설가",
        message: "당신에 대한 누군가의 의견이 당신의 현실이 될 필요가 없다.",
        tag: 1,
    },
    {
        author: "랄프 왈도 에머슨",
        authorProfile: "사상가, 시인",
        message: "나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.",
        tag: 1,
    },
    {
        author: "은하철도 999",
        authorProfile: "-",
        message: "인생의 선택에 타인의 말은 필요없어!",
        tag: 1,
    },
    {
        author: "데일 카네기",
        authorProfile: "작가, 최초 자기계발서의 저자",
        message:
            "나는 신발이 없음을 한탄했는데, 거리에서 발이 없는 사람을 만났다.",
        tag: 1,
    },
    {
        author: "덴젤 워싱턴",
        authorProfile: "영화 배우",
        message:
            "비가 내리기 바란다면 진흙과도 상대해야한다. 피할 수 없는 것이다.",
        tag: 1,
    },
    {
        author: "찰스 다윈",
        authorProfile: "생물 학자, <종의 기원>의 저자",
        message: "자신감 있는 표정을 지으면 자신감이 생긴다.",
        tag: 1,
    },
    {
        author: "너새니얼 호손",
        authorProfile: "작가, <주홍글씨>의 저자",
        message:
            "회의적인 세상이 지독한 의심으로 자신을 공격해도 언제나 자신을 믿어야 한다. 전 인류에 맞서 자신의 유일한 사도가 되어야 한다.",
        tag: 1,
    },
    {
        author: "장 폴 사르트르",
        authorProfile: "작가, 철학자",
        message: "인생은 B(brith)와 D(death)사이의 C(choice)다.",
        tag: 1,
    },
    {
        author: "알베르 카뮈",
        authorProfile: "작가, 철학자",
        message: "행복하기 위해선 절대 다른 사람들을 너무 의식해서는 안 된다.",
        tag: 1,
    },
    {
        author: "일론 머스크",
        authorProfile: "스페이스X 창업자, 테슬라 CEO",
        message:
            "우리가 아침에 일어나서 살아가고 싶게 만드는 이유가 있어야 한다. 여러분은 왜 살려고 하는가?",
        tag: 1,
    },
    {
        author: "커트 코베인",
        authorProfile: "스페이스X 창업자, 테슬라 CEO",
        message: "열정없이 사느니 차라리 죽는게 낫다.",
        tag: 1,
    },
    {
        author: "안나 프로이트",
        authorProfile: "정신분석학자",
        message:
            "힘과 자신감을 외부에서 찾으려 노력했지만, 이는 전부 내면에서 나온다. 늘 이곳에 있다.",
        tag: 1,
    },
    {
        author: "워싱턴 어빙",
        authorProfile: "작가",
        message:
            "위대한 인물에게는 목표가 있고 평범한 사람들에게는 소망이 있을 뿐이다.",
        tag: 1,
    },
    {
        author: "윌 스미스",
        authorProfile: "영화 배우",
        message: "신은 인생에서 최고의 것들을 항상 두려움 뒤에 놓습니다.",
        tag: 1,
    },
    {
        author: "나폴레온 힐",
        authorProfile: "작가, 세계적인 성공학 연구자",
        message: "모든 성취의 시작점은 갈망이다.",
        tag: 1,
    },
    {
        author: "마쓰씨타 고노스케",
        authorProfile: "마쓰시타사 창업자",
        message: "나는 배운게 없기 때문에 모르는게 없다.",
        tag: 1,
    },
    {
        author: "조지 버나드 쇼",
        authorProfile: "극작가, 사회주의자",
        message:
            "실수하며 보낸 인생은 아무것도 하지 않은 인생보다 존경스러울 뿐 아니라 더 유용하다.",
        tag: 1,
    },
];

export const data: AdviceType[] = [...life, ...motivation, ...etc];
