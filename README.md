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
<summary>context를 사용 전 code</summary>

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
<summary>context 사용 후 code</summary>

```javascript
// App.js : state
import React from 'react';
import Screen from './Screen';
import UserContextProvider from './context';

function App() {
  return (
    <UserContextProvider>
      <Screen />
    </UserContextProvider>
  );
}
export default App;

// Screen.js : 단순히 전달만 함
import React from 'react';
import Header from './Header';

const Screen = () => {
  return (
    <div>
      <Header />
      <h1>First screen</h1>
    </div>
  );
};
export default Screen;

// Header.js : props으로 받아서 사용
import React, { useContext } from 'react';
import { UserContext } from './context';

const Header = () => {
  const { name } = useContext(UserContext);
  return (
    <header>
      <a href="#">Home</a>
      <span> Hello, {name}!</span>
    </header>
  );
};

export default Header;

// context.js
import React from 'react';

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => (
  <UserContext.Provider
    value={{
      name: 'Tony',
    }}
  >
    {children}
  </UserContext.Provider>
);

export default UserContextProvider;

```

</details>

context.js

- context.js 파일을 만듦(high order component)
- context.js에서 Context를 만들고 이것을 공용으로 사용
  - export const UserContext = React.createContext();
  - Header(사용할 곳)에서 import { UserContext } from './context';
  - context.js에서 useContext를 사용하고 그것을 export한뒤(useUser) 사용할 곳에서 useContext대신 useUser를 사용해도 됨(9.3강 improve part)
- context.js에서 high order component인 Context.Provider를 만들어서 전체 app을 감쌈

```javascript
// App.js
import React from 'react';

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  <UserContext.Provider
    value={{
      name: 'Tony',
    }}
  >
    {children}
  </UserContext.Provider>;
};

export default UserContextProvider;
```

- 모든 children은 value에 대한 접근 권한이 생김

## 9.3 Recap and Improvements

React.createContext()를 export한 것을
useContext를 사용하여 받아오면 global state를 사용 할 수 있음
(app.js에서 contextProvider로 감싸줘야 함)

Screen.js과 Header.js에서 각각 const { logUserIn } = useContext(UserContext);를 불러서 사용하고 있는데 이를 개선

- context.js에서 const UserContext = React.createContext();를 export하는 대신 사용자가 실행할때마다 자동으로 수행하는 함수를 만들어 줌(useUser)
- 추가로 확장성을 위해 useFns로 loggedIn()을 옮겨줌
