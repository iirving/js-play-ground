import checkCashRegister from "./CashRegister";
import { doCidadjustmentForAType, getTotalCid } from "./CashRegister";

describe("test main checkCashRegister function ", () => {
  test(" returns an object", () => {
    let result = checkCashRegister(19.5, 20, [
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

    let type = typeof result;
    expect(type).toEqual("object");
  });

  test(" resturns a quarter", () => {
    let result = checkCashRegister(19.5, 20, [
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

    let status = result.status;
    let change = result.change;

    expect(status).toEqual("OPEN");
    //  expect(cid.sort()).toEqual(change.sort());
    expect(result.change.length).toBe(1);
    expect(result.change[0][0]).toBe("QUARTER");
    expect(result.change[0][1]).toBe(0.5);
  });

  test(" for status CLOSED ", () => {
    let cid = [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ];
    let result = checkCashRegister(19.5, 20, cid);
    let status = result.status;
    let change = result.change;

    expect(status).toEqual("CLOSED");
    expect(cid.sort()).toEqual(change.sort());
  });

  test(" for status INSUFFICIENT_FUNDS ", () => {
    // expecting 50 change but we only have a penny
    let cid = [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ];
    let result = checkCashRegister(19.5, 20, cid);
    let status = result.status;
    let change = result.change;

    expect(status).toEqual("INSUFFICIENT_FUNDS");
    expect(change.length).toBe(0);
  });

  test("another INSUFFICIENT_FUNDS test", () => {
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

    expect(result.status).toBe("INSUFFICIENT_FUNDS");
    expect(result.change.length).toBe(0);
  });

  test("basic test", () => {
    let cid = [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ];
    let result = checkCashRegister(3.26, 100, cid);

    expect(result.status).toBe("OPEN");
    expect(result.change.length).toBe(7);
    expect(result.change[0][0]).toBe("TWENTY");
    expect(result.change[0][1]).toBe(60);
  });
});

describe("testing private subfunctiions #WARNING may break if refactoring", () => {
  describe("testing sub function doCidadjustmentForAType", () => {
    test(" passing in 96.76, [TWENTY, 60]", () => {
      let cid = ["TWENTY", 60];
      let result = doCidadjustmentForAType(96.76, cid);

      let amount = result.amount;
      let change = result.change;

      expect(amount).toBe("60.00");
      expect(change[0]).toBe("TWENTY");
      expect(change[1]).toBe("60.00");
    });

    test(" doCidadjustmentForAType another 20 five 55", () => {
      let result = doCidadjustmentForAType(20, ["FIVE", 55]);

      expect(result.amount).toBe("20.00");
      expect(result.change[1]).toBe("20.00");
    });

    test(" doCidadjustmentForAType another 20 five 55", () => {
      let result = doCidadjustmentForAType(16 + 0.5 + 0.2 + 0.04, ["FIVE", 55]);

      let amount = result.amount;
      let change = result.change;

      expect(amount).toBe("15.00");
      expect(change[0]).toBe("FIVE");
      expect(change[1]).toBe("15.00");
    });

    test(" doCidadjustmentForAType for a penny", () => {
      let result = doCidadjustmentForAType(0.5, ["PENNY", 0.01]);

      let amount = result.amount;
      let change = result.change;

      expect(amount).toBe("0.01");
      expect(change[0]).toBe("PENNY");
      expect(change[1]).toBe("0.01");
    });

    //  ["ONE", 1],
    test(" doCidadjustmentForAType for a signle ONE and can ntot make change", () => {
      let result = doCidadjustmentForAType(0.5, ["ONE", 1]);

      let amount = result.amount;
      let change = result.change;

      expect(amount).toBe(0);
      expect(change[0]).toBe("ONE");
      expect(change[1]).toBe(0);
    });
  });

  describe("testing getTotalCid", () => {
    test(" passing in more simple example]", () => {
      let cid = [["TWENTY", 100]];
      let result = getTotalCid(cid);
      expect(result).toBe(100);
    });

    test(" passing in another simple example]", () => {
      let cid = [
        ["FIVE", 55],
        ["TWENTY", 100],
      ];
      let result = getTotalCid(cid);
      expect(result).toBe(155);
    });

    test(" passing in more completed exaple]", () => {
      let cid = [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ];
      let result = getTotalCid(cid);

      expect(result).toBe(335.41);
    });
  });
});
