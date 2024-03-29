import React, { useState } from 'react'
import './Calculadora.css'
import Container from '@mui/material/Container';
import { height } from '@mui/system';

export default function Calculadora() {

    const[num,setNum] = useState(0);
    const[oldnum, setOldNum] = useState(0);
    const[operator, setOperator] = useState();

    function inputNum(e){
        var input=e.target.value;

        if(num === 0){
            setNum(input);
        }else{
            setNum(num + input);
        }
    }

    function porcentagem(e){
        setNum(num/100);
    }

    function clear(e){
        setNum(0);
    }

    function changeSing(){
        if(num > 0){
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }

    function calculate(){
        if(operator === "/"){
            setNum(parseFloat(oldnum) / parseFloat(num));
        }else if(operator === "x"){
            setNum(parseFloat(oldnum) * parseFloat(num));
        }else if(operator === "-"){
            setNum(parseFloat(oldnum) - parseFloat(num));
        }else if(operator === "+"){
            setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }

    function operatorHandler(e){
        var operatorInput =e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }


  return (
    <div>
      <box m={5}/>
        <Container maxWidth="xs">
         <div className='wrapper'>
            <box m={12}/>
            <h1 className='result'>{num}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={changeSing}>+/-</button>
            <button onClick={porcentagem}>%</button>
            <button className="orange" onClick={operatorHandler} value="/">/</button>
            <button className="gray" onClick={inputNum} value={7}>7</button>
            <button className="gray" onClick={inputNum} value={8}>8</button>
            <button className="gray" onClick={inputNum} value={9}>9</button>
            <button className="orange" onClick={operatorHandler} value="x">X</button>
            <button className="gray" onClick={inputNum} value={4}>4</button>
            <button className="gray" onClick={inputNum} value={5}>5</button>
            <button className="gray" onClick={inputNum} value={6}>6</button>
            <button className="orange" onClick={operatorHandler} value="-">-</button>
            <button className="gray" onClick={inputNum} value={1}>1</button>
            <button className="gray" onClick={inputNum} value={2}>2</button>
            <button className="gray" onClick={inputNum} value={3}>3</button>
            <button className="orange" onClick={operatorHandler} value="+">+</button>
            <button id="zero" className="gray" onClick={inputNum} value={0}>0</button>
            <button className="gray" onClick={inputNum} value={"."}>,</button>
            <button className='orange' onClick={calculate}>=</button>
            <footer>
                <p>🚀 Feito por{" "}
                    <a href="https://github.com/AnaBeCosta">
                         Ana Beatriz Faria
                    </a></p>
            </footer>
         </div>
    </Container>
   </div>
  )
}
