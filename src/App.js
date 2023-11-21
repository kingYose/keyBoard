
import { useState } from "react"
import { KeyBoard } from './components/keyBoard.js';
import Screen from './components/screen.js';
import './components/keyBoard.css';
import Buttons from "./components/buttons.js";

function App() {



  const english = "1234567890qwertyuiopasdfghjkl;zxcvbnm,.".split("");
  const hebrew = "1234567890/'קראטוןםפשדגכעיחלךףזסבהנמצתץ".split("");

  const [isCollor, setCollor] = useState(false)
  let collor = isCollor ? "red" : "green"
  const [islanguage, setLanguage] = useState(true)
  let language = islanguage ? hebrew : english;
  const [text, setText] = useState(" ")
  const OnKeyClick = (event) => {
    setText(text + event.target.innerText);

  }

  return (
    <div className="App">
      <div className="screenContainer" style={{ color: collor }}>
        <Screen s={text} />
      </div>

      < div className='keyBoard' >
        {language.map((letter, index) => (<KeyBoard letter={letter} key={index} onClick={OnKeyClick} />))}
      </div>

      <Buttons setText={setText} setLanguage={setLanguage} text={text} language={islanguage}
        setCollor={setCollor} Collor={isCollor} />

    </div >
  );
}

export default App;
