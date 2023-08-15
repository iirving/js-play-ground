// import { checkCashRegister } from "./CashRegister_OTHER.js";
const checkCashRegister = require("./CashRegister_OTHER.js");

describe("testing checkCashRegister function", () => {
  test(" doCidadjustmentForAType passing in 60, [TWENTY, 60]", () => {
    //result = doCidadjustmentForAType(60, ["TWENTY", 60]);
    let result = checkCashRegister(3.26, 100, [
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

    expect(result.status).toBe("OPEN");
    expect(result.change.length).toBe(7);
    expect(result.change[0][0]).toBe("TWENTY");
    expect(result.change[0][1]).toBe(60);
  });
});
