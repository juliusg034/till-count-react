import './BillList.css';

function BillList () {

  return (
    <div class="bill-list">
      <div class="top">
        <i id="refresh" class="fa fa-refresh"></i>
        <h5 id="white">Total = $$$</h5>
        <h5>Deposit = $$$</h5>
        <div class="line"></div>
        <p>0 x $100</p>
        <p>0 x $50</p>
        <p>0 x $20</p>
        <p>0 x $10</p>
        <p>0 x $5</p>
        <p>0 x $1</p>
      </div>
      <div class="bottom">
        <h5 id="white">Ending Till</h5>
        <h5>Total = $$$</h5>
        <div class="line"></div>
        <p>0 x $100</p>
        <p>0 x $50</p>
        <p>0 x $20</p>
        <p>0 x $10</p>
        <p>0 x $5</p>
        <p>0 x $1</p>
      </div>
    </div>
  )


};


export default BillList;