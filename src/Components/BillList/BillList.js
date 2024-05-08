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
        <p><span class="value">{values[100]*100}</span> <span class="label">in $100</span></p>
        <p><span class="value">{values[50]*50}</span> <span class="label">in $50</span></p>
        <p><span class="value">{values[20]*20}</span> <span class="label">in $20</span></p>
        <p><span class="value">{values[10]*10}</span> <span class="label">in $10</span></p>
        <p><span class="value">{values[5]*5}</span> <span class="label">in $5</span></p>
        <p><span class="value">{values[1]}</span> <span class="label">in $1</span></p>
        <p><span class="value">{values[0.25]}</span> <span class="label">in 25¢</span></p>
        <p><span class="value">{values[0.10]}</span> <span class="label">in 10¢</span></p>
        <p><span class="value">{values[0.05]}</span> <span class="label">in 5¢</span></p>
        <p><span class="value">{values[0.01]}</span> <span class="label">in 1¢</span></p>
      </div>
    </div>
  )


};


export default BillList;