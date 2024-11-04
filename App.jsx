import styles from './App.module.css';
import Display from './Components/display';
import ButtonsContainer from './Components/ButtonsContainer';
import {useState} from 'react';
function App(){
  const [calVal,setCalVal] = useState();
  const onButtonClick = (buttonText)=>{
    if(buttonText==='C'){
setCalVal("");
    }
    else if(buttonText==='='){
const result = eval(calVal);
setCalVal(result);
    }
    else{
      const newDisplayValue = calVal+buttonText;
      setCalVal(newDisplayValue);
    }
  }
  return (

    <div className={styles.calculator} id="container">
<Display displayValue={calVal}></Display>
<ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}
export default App;