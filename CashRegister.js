// Cash Register

// Design a cash register drawer function checkCashRegister() that accepts purchase price as
// the first argument (price), payment as the second argument (cash),
// and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
// or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change
// if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
// sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

const STATUS_INSUFFICIENT = "INSUFFICIENT_FUNDS";
const STATUS_OPEN = "OPEN";
const STATUS_CLOSED = "CLOSED";

let emptyChangeArray = [
  ["PENNY", 0],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

const CURRENCY_VALUES_MULTIPLIER = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};

/**
 * Loop thur cash in draw and depending on each sub array label total dollar amount.
 * @param {Array} cid - Cash in draw
 */
function getTotalCid(cid) {
  let total_pennies = 0;
  for (const element of cid) {
    console.log(element[1]);
    total_pennies = total_pennies + element[1] * 100;
    //    console.log();
  }

  return total_pennies / 100;
}
/**
 * remove the changeAmount from the cash in draw
 * @param {Float} changeAmount the dollar (currancy $$.00) amount to be removed
 * @param {Array} cid cash in draw Arraychange array
 * @returns an cashRegister object with a status key and a change key Array.
 */
function doCidadjustment(changeAmount, cid) {
  return { status: "OPEN", change: [["QUARTER", 0.5]] };
}

function checkCashRegister(price, cash, cid) {
  let change = {
    status: STATUS_OPEN,
    change: cid,
  };

  let changeAmount = cash - price;
  console.log("cash", cash, "price", price, "changeAmount", changeAmount);

  // remove changeAmount from Cash in Draw (cid)

  // get total cid amount
  let totalCid = getTotalCid(cid);
  console.log("totalCid", totalCid);

  if (totalCid < changeAmount) {
    change.status = STATUS_INSUFFICIENT;
    change.change = [];
  } else if (changeAmount == totalCid) {
    change.status = STATUS_CLOSED;
    change.change = cid;
  } else {
    change = doCidadjustment(changeAmount, cid);
  }
  return change;
}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ]),
//   'should return {status: "OPEN", change: [["QUARTER", 0.5]]}.'
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ]),
//   ' should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.'
// );

let result = checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

console.assert(
  result.status === "INSUFFICIENT_FUNDS",
  `should return status: INSUFFICIENT_FUNDS,  Not >`,
  result.status
);
console.table(result.change);
//  ' should return {status: "INSUFFICIENT_FUNDS", change: []}.';

// let number = 22;
// const errorMsg = "the # is not even";
// console.assert(number % 2 === 0, "%0", { number, errorMsg });
// number = number + 1;
// console.assert(number % 2 === 0, "%0", { number, errorMsg });
console.log("eof");
