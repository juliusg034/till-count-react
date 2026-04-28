export function getTotal(inputs) {
    let total = 0;

    for (const key in inputs) {
    const val = Number(inputs[key]);
    console.log(`Calculating total: key=${key}, value=${val}`);

    if (!isNaN(val) && inputs[key] !== "") {
      total += val;
    }
  }
  console.log("Total calculated:", total);
  return total;
}

export function getDeposit(inputs, sum, denominations) {
  const billKeys = ["hundreds", "fifties", "twenties", "tens", "fives", "ones"];
  const coinKeys = ["quarters", "dimes", "nickels", "pennies"];

  let endingTotal = sum;
  let depositTotal = 0;

  const newDepositArray = {
    total: "0.00",
    bills: {}
  };

  const newEndingTill = {
    total: "0.00",
    bills: {}
  };

  for (const key of billKeys) {
    const denom = denominations[key];
    const value = Number(inputs[key]) || 0;
    const countAvailable = Math.floor(value / denom);

    let countToDeposit = 0;

    for (let i = 0; i < countAvailable; i++) {
      if (endingTotal - denom >= 300) {
        endingTotal -= denom;
        depositTotal += denom;
        countToDeposit++;
      } else {
        break;
      }
    }

    newDepositArray.bills[key] = countToDeposit;
    newEndingTill.bills[key] = countAvailable - countToDeposit;
  }

  // Coins stay in the till
  for (const key of coinKeys) {
    const denom = denominations[key];
    const value = Number(inputs[key]) || 0;
    newEndingTill.bills[key] = value;
  }

  newDepositArray.total = depositTotal.toFixed(2);
  newEndingTill.total = endingTotal.toFixed(2);

  return {
    depositArray: newDepositArray,
    endingTill: newEndingTill
  };
}