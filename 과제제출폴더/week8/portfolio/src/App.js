import { useState } from 'react';
import './App.css';
import CreateFooter from './components/CreateFooter.jsx';
import CreateNav from './components/CreateNav.jsx';
import CreateSection from './components/CreateSection.jsx';




// index.js에 랜더링 할 값들 넘겨주기
function App() {
  let [good, ClickGood] = useState(0)
  return (
    <>
      <header id = "header">
        <h1>🔽Jin Hoyoung Portfolio🔽</h1>
        <br/>
        <h2>프론트앤드 새싹🌱<button onClick={() =>{ClickGood(good + 1)} }>👍🏼{good}</button></h2>
      </header>
      <nav>
        <CreateNav />
      </nav>
      <CreateSection idName="WhyFE"/>
      <CreateSection idName="profile"/>
      <CreateSection idName="dream"/>
      <CreateSection idName="hobby"/>
      <CreateFooter/>
    </>
  );
}

export default App;
