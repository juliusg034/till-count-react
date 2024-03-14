import './BillList.css';

function BillList ({ handleSubmit, values, deposit, total, endingTotal, depositTotal, addClass }) {


  return (
    <div class="bill-list">
      <div class="top">
        <i id="refresh"  className={`fa fa-refresh ${addClass ? 'fa-spin': ''}`} onClick={handleSubmit} ></i>
        <h5 id="white">Total = {total}</h5>
        <h5>Deposit = {depositTotal}</h5>
        <div class="line"></div>
        <p>{deposit[100]} x $100</p>
        <p>{deposit[50]} x $50</p>
        <p>{deposit[20]} x $20</p>
        <p>{deposit[10]} x $10</p>
        <p>{deposit[5]} x $5</p>
        <p>{deposit[1]} x $1</p>
      </div>
      <div class="bottom">
        <h5 id="white">Ending Till</h5>
        <h5>Total = {endingTotal}</h5>
        <div class="line"></div>
        <p>{values[100]*100} in $100</p>
        <p>{values[50]*50} in $50</p>
        <p>{values[20]*20} in $20</p>
        <p>{values[10]*10} in $10</p>
        <p>{values[5]*5} in $5</p>
        <p>{values[1]} in $1</p>
        <p>{values[0.25]} in 25¢</p>
        <p>{values[0.10]} in 10¢</p>
        <p>{values[0.05]} in 5¢</p>
        <p>{values[0.01]} in 1¢</p>
      </div>
    </div>
  )


};


export default BillList;