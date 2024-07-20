import React, { useState } from 'react'
import { Button, Container, Current, Previous, Screen } from '../styles/styling'

const Calci = () => {

    const[current,setCurrent]=useState("");
    const [operations,setOperations]=useState("");
    const [previous,setPrevious]=useState("");

    const appendValue=(e)=>{
        const value=e.target.getAttribute("data");
        if(value==='.' && current.includes('.')){
            return
        }
        setCurrent(current+value);
    };

    const deleteHandler=()=>{
        setCurrent(String(current).slice(0,-1))
    }

    const allClear=()=>{
        setCurrent('')
        setOperations('');
        setPrevious('');
    }

    const operate=(e)=>{
        if(current===''){
            return
        }
        if(previous!==''){
            let ans=compute();
            setPrevious(ans);
        }
        else{
            setPrevious(current);
        }
        setCurrent('');
        setOperations(e.target.getAttribute("data"));
    };

    const equalsOperation=()=>{
        let answer=compute();
        if(answer===undefined || answer===null){
            return
        }
        setCurrent(answer)
        setPrevious('')
        setOperations('')
    }

    const compute=()=>{
        let res;
        let prevNum=parseFloat(previous);
        let currNum=parseFloat(current);
        switch(operations){
            case "/":
                res=prevNum/currNum;
                break;
            case "*":
                res=prevNum*currNum;
                break;
            case "+":
                res=prevNum+currNum;
                break;
            case "-":
                res=prevNum-currNum;
                break;
            default:
                return
        }
        return res.toFixed(3)
    }

  return (
    <div>
        <Container>
            <Screen>
                <Previous>{previous} {operations}</Previous>
                <Current>{current}</Current>
            </Screen>
            <Button gridSpan={2} deleteBtn onClick={allClear}>AC</Button>
            <Button del onClick={deleteHandler}>DEL</Button>
            <Button data={'/'} onClick={operate} operation>/</Button>
            <Button data={7} onClick={appendValue}>7</Button>
            <Button data={8} onClick={appendValue}>8</Button>
            <Button data={9} onClick={appendValue}>9</Button>
            <Button data={'*'} onClick={operate} operation>*</Button>
            <Button data={4} onClick={appendValue}>4</Button>
            <Button data={5} onClick={appendValue}>5</Button>
            <Button data={7} onClick={appendValue}>6</Button>
            <Button data={'+'} onClick={operate} operation>+</Button>
            <Button data={1} onClick={appendValue}>1</Button>
            <Button data={2} onClick={appendValue}>2</Button>
            <Button data={3} onClick={appendValue}>3</Button>
            <Button data={'-'} onClick={operate} operation>-</Button>
            <Button decimal data={'.'} onClick={appendValue}>.</Button>
            <Button data={0} onClick={appendValue}>0</Button>
            <Button gridSpan={2} equals onClick={equalsOperation}>=</Button>
        </Container>
    </div>
  )
}

export default Calci
