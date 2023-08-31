// import checkCashRegister from "./CashRegister.js";
// import { doCidadjustmentForAType } from "./CashRegister.js";

// const {
//   checkCashRegister,
//   doCidadjustmentForAType,
// } = require("./CashRegister.js");
import {
  checkCashRegister,
  doCidadjustmentForAType,
  getTotalCid,
} from "./CashRegister.js";

describe("test highlevel checkCashRegister function ", () => {
  test("basic test", () => {
    result = checkCashRegister(19.5, 20, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ]);
    //   'should return {status: "OPEN", change: [["QUARTER", 0.5]]}.'
    // );

    // expect(result.status).toEqual("OPEN");
    expect(result.status).toEqual("INSUFFICIENT_FUNDS");
    expect(result.change.length).toBe(7);
    expect(result.change[0][0]).toBe("TWENTY");
    expect(result.change[0][1]).toBe(60);
  });
});

describe("testing sub function doCidadjustmentForAType", () => {
  test.only(" doCidadjustmentForAType passing in 60, [TWENTY, 60]", () => {
    result = doCidadjustmentForAType(20, ["FIVE", 55]);
    // let result = (60, ["TWENTY", 60]);

    //console.dir(result);
    //console.table(result);

    let amount = result.change; // === 15;

    expect(amount[1]).toBe(15);

    //    console.table("result", result);
    // expect(result).toBe("OPEN");
  });

  test(" for   [TWENTY, 60], > 3 $20 bill", () => {
    result = doCidadjustmentForAType(20, ["FIVE", 55]);
  });

  test(" doCidadjustmentForAType another 20 five 55", () => {
    result = doCidadjustmentForAType(20, ["FIVE", 55]);
    console.log(
      "doCidadjustmentForAType",
      "amount",
      result.amount,
      "should return 15"
    );
    console.table(result.change);
    expect(result.change[1]).toBe(15);
  });
});
