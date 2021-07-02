# React JS challenges

- create-react-app
- class component
- container - present pattern
- hooks
- etc

# useContext and useReducer

노마드코더 리액트 멤버십 보너스 강의 정리

## Plan

- useContext와 useReducer의 이해
- useContext를 번역 component를 만들면서 연습
- useReducer를 to do 앱을 만들면서 연습
- useReducer와 useContext를 함께 사용해서 Redux를 직접 만들어 보기
  - Redux : 상태관리 라이브러리

## 9.1 Context and State Management introduction

React - state, props를 가짐
서로 다른 하위 컴포넌트를 모두 감싸는 High order component로 공통의 state를 관리할 수 있음

- 중간의 건내 주기만 하고 아무것도 하지 않는 컴포넌트가 생길 수 있음
- state나 props의 변경으로 엉뚱한 스크린이 다시 렌더링 되는 문제가 생길 수 있음
- 큰 component로 감싸는 대신 data 저장소(store)를 만드는 것 : ex) Redux, MobX, Unstated, Context

Context vs Redux

- context : built in react default
  - simple app
- Redux
  - bigger, complex app

## 9.2 useContext in Action

- npx create-react-app [name]
- context를 사용하기 전
  - high order component의 state를 props를 전달 전달해서 사용

<details>
<summary>code</summary>

```javascript
// App.js : state
function App() {
  const [user] = useState({
    name: 'Tony',
  });
  return (
    <>
      <Screen user={user} />
    </>
  );
}

// Screen.js : 단순히 전달만 함
const Screen = ({ user }) => {
  return (
    <div>
      <Header user={user} />
      <h1>First screen</h1>
    </div>
  );
};

// Header.js : props으로 받아서 사용
const Header = ({ user }) => (
  <header>
    <a href="#">Home</a>
    <span> Hello, {user.name}!</span>
  </header>
);
```

</details>

- context 사용 후

<details>
<summary>code</summary>

```javascript

```

</details>
