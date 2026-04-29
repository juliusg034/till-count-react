import './BillList.css';
import React, { useState } from "react";
import * as calc from "../InputForm/calc.js";
import html2canvas from "html2canvas";

function BillList ({ inputs, spin, setSpin, depositArray, endingTill }) {


  let sum = calc.getTotal(inputs);
  function downloadScreenshot() {
  const element = document.getElementById("screenshot-target");

  html2canvas(element).then((canvas) => {
    console.log("Canvas generated:", canvas);
    const link = document.createElement("a");
    link.download = `till-count-${new Date().toISOString().slice(0, 10)}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

  return (
    <div class="bill-list">
      <div class="top">
        <i id="refresh" class="fa fa-refresh" className={spin ? "spin-once fa fa-refresh" : "fa fa-refresh"} onClick={() => setSpin(true)} onAnimationEnd={() => setSpin(false)}></i>
        <h5 id="white">Total = ${sum.toFixed(2)}</h5>
        <h5>Deposit = ${depositArray.total}</h5>
        <div class="line"></div>
        <p>{depositArray.bills.hundreds} x $100</p>
        <p>{depositArray.bills.fifties} x $50</p>
        <p>{depositArray.bills.twenties} x $20</p>
        <p>{depositArray.bills.tens} x $10</p>
        <p>{depositArray.bills.fives} x $5</p>
        <p>{depositArray.bills.ones} x $1</p>
      </div>
      <div class="bottom">
        <h5 id="white">Ending Till</h5>
        <h5>Total = ${endingTill.total}</h5>
        <div class="line2"></div>
        <p>{endingTill.bills.hundreds} x $100</p>
        <p>{endingTill.bills.fifties} x $50</p>
        <p>{endingTill.bills.twenties} x $20</p>
        <p>{endingTill.bills.tens} x $10</p>
        <p>{endingTill.bills.fives} x $5</p>
        <p>{endingTill.bills.ones} x $1</p>
        <p>{inputs.quarters} in $0.25</p>
        <p>{inputs.dimes} in $0.10</p>
        <p>{inputs.nickels} in $0.05</p>
        <p>{inputs.pennies} in $0.01</p>
      </div>
      <p id="timestamp">Time Stamp: {new Date().toLocaleDateString()}</p>
      <button type="button" id="download-btn" onClick={downloadScreenshot}>
        Download Screenshot
      </button>
    </div>
  )


};


export default BillList;