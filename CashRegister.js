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
    // console.log(element[1]);
    total_pennies = total_pennies + element[1] * 100;
    //    console.log();
  }

  return total_pennies / 100;
}

/**
 * for a give Cash in Draw element, how much of that element can I use
 *  and what is the remaining amount
 *  @param {Float} changeAmount the dollars (currancy $$.00) amount to be removed
 * @param {Array} cidElement with 2 elements a string for the BillType
 *  and a intger for the total dollar amount of that bill
 *  examples :
 *    ["TWENTY", 60], > 3 $20 bill
 *    ["DIME", 3.1], > 31 dimes (10 cents)
 *
 * @returns {Object} first part "amount" the Adjusted in dollars,
 *  the value of the bills * the number of Bills,
 *  second "change" the Bills removed from Cash in Draw
 *
 *  exapmples :
 *    ["QUARTER", 0.5]  2 Quarter coins
 *    ["PENNY", 0.04]] 4 penny coins
 *    ["TEN", 20] 2 ten dollar bills
 *    ["ONE HUNDRED", 0] no ONE HUNDRED dollar bills
 */
function doCidadjustmentForAType(changeAmount, cidElement) {
  let type = cidElement[0];
  let valueInCID = cidElement[1];
  let value_in_pennies = valueInCID * 100;
  let ValueOfType = CURRENCY_VALUES_MULTIPLIER[type]; //in pennies
  let changeAmountInPennies = changeAmount * 100; // the change Amount in Pennies
  let changeArray = []; // the type , the value of type being given as change

  // console.log(
  //   "changeAmount",
  //   changeAmount,
  //   "type",
  //   type,
  //   "valueInCID",
  //   valueInCID,
  //   "ValueOfType",
  //   ValueOfType
  // );

  changeArray = [type, 0];
  if (valueInCID === changeAmount) {
    // the value in the cash draw matches the amount of change I am looking for
    //  then  easy return of all the cash in draw for this type
    changeArray = [type, valueInCID];
    return { amount: valueInCID, change: changeArray };
  } else if (changeAmount === 0) {
    // if we are looking for 0 change then return 0 and no change given out
    return { amount: 0, change: [] };
  } else if (valueInCID == 0) {
    // if  Type has 0 in the cash draw then return amount unchanged and no change given out
    return { amount: changeAmount, change: [] };
  } else if (ValueOfType > changeAmountInPennies) {
    // if the value of one unit of the type is greater that the changeAmount
    //   then return the amount 0 and a null changeArray
    return { amount: 0, change: [] };
  } else if (value_in_pennies <= changeAmountInPennies) {
    // console.log(
    //   "test case",
    //   "changeAmountInPennies",
    //   changeAmountInPennies,
    //   "value_in_pennies",
    //   value_in_pennies
    // );
    // some number of bills can be used to pay some ammount of the changeAmount
    // we can use all of the bill to pay some of the amount
    let numberOfBillWeCanUse = value_in_pennies / ValueOfType; //3
    let changeToReturn = (ValueOfType / 100) * numberOfBillWeCanUse;
    changeArray = [type, changeToReturn];
    let newchangeAmount = changeAmount - changeToReturn;
    // console.log(
    //   "test case return",
    //   "changeToReturn",
    //   changeToReturn,
    //   "newchangeAmount",
    //   newchangeAmount
    // );
    return { amount: newchangeAmount, change: changeArray };
  }

  return { amount: 0, change: changeArray };

  // let MULTIPLIER = CURRENCY_VALUES_MULTIPLIER[type];
  // let reminder = value_in_pennies % MULTIPLIER;
  // let NumberOfBillsOFThisType = value_in_pennies / MULTIPLIER;
  // console.log(
  //   "type",
  //   type,
  //   "value",
  //   value,
  //   "value_in_pennies",
  //   value_in_pennies,
  //   "MULTIPLIER",
  //   MULTIPLIER,
  //   "reminder",
  //   reminder,
  //   "Number Of Bills OF This Type",
  //   NumberOfBillsOFThisType
  // );

  // if (MULTIPLIER > remaningAmmountInPennies) {
  //   console.log(
  //     "skip it noghthing to do",
  //     "remaningAmmountInPennies",
  //     remaningAmmountInPennies,
  //     "MULTIPLIER",
  //     MULTIPLIER
  //   );
  // } else {
  //   console.log("we might be able to use it ");
  //   console.log(
  //     "remaningAmmountInPennies",
  //     remaningAmmountInPennies,
  //     "MULTIPLIER",
  //     MULTIPLIER
  //   );
  //   NumberOFThisTypeICanUse = 3;
  //   if (NumberOFThisTypeICanUse > 0) {
  //     remaningAmmountInPennies =
  //       remaningAmmountInPennies - NumberOFThisTypeICanUse * MULTIPLIER;

  //     console.log(
  //       "type",
  //       "MULTIPLIER",
  //       MULTIPLIER,
  //       "NumberOFThisTypeICanUse",
  //       NumberOFThisTypeICanUse,
  //       "remaningAmmountInPennies",
  //       remaningAmmountInPennies
  //     );
  //   }
  // }
}

/**
 * remove the changeAmount from the cash in draw
 * @param {Float} changeAmount the dollar (currancy $$.00) amount to be removed
 * @param {Array} cid cash in draw Arraychange array
 * @returns an cashRegister object with a status key and a change key Array.
 */
function doCidadjustment(changeAmount, cid) {
  // for each element in cid highest to lowest
  let cid_length = cid.length;

  let changeAmount_in_pennies = changeAmount * 100;
  let remaningAmmountInPennies = changeAmount_in_pennies;

  let change = {
    status: STATUS_INSUFFICIENT,
    change: [],
  };
  let adjustedElement = [];
  // let adjustment = [];
  let changeElementAmount = 0;

  NumberOFThisTypeICanUse = 0;

  console.log(
    "changeAmount",
    changeAmount,
    "changeAmount_in_pennies",
    changeAmount_in_pennies
  );
  for (let x = cid_length - 1; x >= 0; x--) {
    element = cid[x];

    let adjustment = doCidadjustmentForAType(changeAmount, element);
    adjustedElement = adjustment.change;
    let changeElementAmount = adjustedElement[1];

    if (changeElementAmount != 0) {
      change.status = STATUS_OPEN;
      change.change.push(adjustedElement);
      changeAmount = changeAmount - adjustment.amount;
    }
  }

  return change; //{ status: "OPEN", change: [["QUARTER", 0.5]] };
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

// let result = checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 1],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);

// console.assert(
//   result.status === "INSUFFICIENT_FUNDS",
//   `should return status: INSUFFICIENT_FUNDS,  Not >`,
//   result.status
// );
// console.table(result.change);
//  ' should return {status: "INSUFFICIENT_FUNDS", change: []}.';

// let number = 22;
// const errorMsg = "the # is not even";
// console.assert(number % 2 === 0, "%0", { number, errorMsg });
// number = number + 1;
// console.assert(number % 2 === 0, "%0", { number, errorMsg });

// let result = checkCashRegister(3.26, 100, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);
// console.log(result.status, "should be open");

// console.table(result.change);
// console.log("should return change:>>");
// console.table([
//   ["TWENTY", 60],
//   ["TEN", 20],
//   ["FIVE", 15],
//   ["ONE", 1],
//   ["QUARTER", 0.5],
//   ["DIME", 0.2],
//   ["PENNY", 0.04],
// ]);

// result = doCidadjustmentForAType(96.74, ["TWENTY", 60]);
// console.log("doCidadjustmentForAType", "amount", result.amount);
// console.table(result.change);
// console.log("eof");

// test(" doCidadjustmentForAType passing in 60, [TWENTY, 60]", () => {
//   result = doCidadjustmentForAType(60, ["TWENTY", 60]);

//   expect(result.change[0]).toBe(60);
// });

result = doCidadjustmentForAType(60, ["TWENTY", 60]);
console.log(
  "doCidadjustmentForAType 1",
  "passing in 60, [TWENTY, 60]",
  result.amount,
  result.change[0],
  result.change[1]
);
console.assert(result.amount === 60, "result.amount should be 60");
console.assert(
  result.change[0] === "TWENTY",
  "result.change bill type should be TWENTY"
);
console.assert(result.change[1] === 60, "result.change amount should be 60");

result = doCidadjustmentForAType(70, ["TWENTY", 60]);
console.log(
  "doCidadjustmentForAType we can use all of the bill to pay some of the amount",
  "passing in 70, [TWENTY, 60]",
  " expecting 10, [TWENTY, 60] ",
  result.amount,
  result.change[0],
  result.change[1]
);
console.assert(result.amount === 10, "result.amount should be 10");
console.assert(
  result.change[0] === "TWENTY",
  "result.change bill type should be TWENTY"
);
console.assert(result.change[1] === 60, "result.change amount should be 60");

result = doCidadjustmentForAType(19, ["TWENTY", 20]);
console.log(
  "doCidadjustmentForAType if the amount of change is less than one type on this bill",
  "passing in 19, [TWENTY, 20]",
  "expecting {0 , []}  ",
  result.amount,
  result.change[0],
  result.change[1]
);
console.assert(result.amount === 0, "result.amount should be 0");
console.assert(
  Array.isArray(result.change) && result.change.length == 0,
  "result.change should be an empty array"
);

// if the value of one unit of the type is greater that the changeAmount
//   then return the amount 0 and a null changeArray
result = doCidadjustmentForAType(0, ["TWENTY", 20]);
console.log(
  "doCidadjustmentForAType test for 0 change",
  "passing in 0, [TWENTY, 20]",
  "expecting {0 , []}  ",
  result.amount,
  result.change,
  result.change[0],
  result.change[1]
);
console.assert(result.amount === 0, "result.amount should be 0");
console.assert(
  Array.isArray(result.change) && result.change.length == 0,
  "result.change should be an empty array"
);

result = doCidadjustmentForAType(123, ["TWENTY", 0]);
console.log(
  "doCidadjustmentForAType test for 0 bills in draw",
  "passing in 123, [TWENTY, 0]",
  "expecting {0 , []}  ",
  result.amount,
  result.change,
  result.change[0],
  result.change[1]
);
console.assert(result.amount === 123, "result.amount should be 123");
console.assert(
  Array.isArray(result.change) && result.change.length == 0,
  "result.change should be an empty array"
);

console.log("eof");
