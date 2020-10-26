/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import Input from "./Input";
import Output from "../Output/Output";
import {calculateGross} from "../api"

let Margin = () => {
  let [salePrice, setSalePrice] = useState("-");
  let [profit, setProfit] = useState("-");
  let [gross, setGross] = useState("-");
  let [cost, setCost] = useState();
  let [mark, setMark] = useState();
  let costChange = () => {
    let data = event.target.value * 1;
    setCost(data);
  };
  let markChange = () => {
    let data = event.target.value*1
    setMark(data);
    
  };
  let handleClick= () => {
   setMark("")
   setProfit("")
   setSalePrice("")
   setCost("")
   setGross("") 
  };
  let handleOnSubmit = (event) => {
    event.preventDefault();
    let data ={"cost":cost,"mark":mark}
    console.log(data)
    calculateGross(data)
    .then((response)=>{
      let {gross,salePrice,profit} = response.data;
      setGross(gross.toFixed(2)+"%");
      setSalePrice("$"+salePrice.toFixed(2));
      setProfit("$"+profit.toFixed(2));
    })
  };

  return (
    <div>
      <Input markChange={markChange}costChange={costChange}cost={cost}mark={mark} handleOnSubmit={ handleOnSubmit} handleClick={handleClick}/>
      <Output salePrice={salePrice} profit={profit} gross={gross} />
    </div>
  );
};

export default Margin;
