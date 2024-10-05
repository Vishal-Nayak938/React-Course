import { useState } from 'react';
import  List from './clothList.jsx' 
import Input from './input.jsx'
import styles from './whole.module.css'
function App() {

let [currnetValue,setCurrnetValue]=useState([]);
  const handleOnChange=(event)=>{
if(event.key==='Enter')
{
let currentText=event.target.value;

let newItems=[...currnetValue,currentText]
event.target.value='';
setCurrnetValue(newItems);
}
};

  return <div className={styles.all}>
  <center className={styles.Container} >
    <h1 className={styles.head}>Buy Your Cloth</h1>
<Input handleOnChange2={handleOnChange}></Input>
<List Cloth={currnetValue} >
</List>

</center>
</div>
  
}

export default App
