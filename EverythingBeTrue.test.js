import { truthCheck } from "./EverythingBeTrue";

describe("test truthCheck function ", () => {
  test("for some isBot false in collection should return false.", () => {
    let result = truthCheck(
      [
        { name: "Quincy", role: "Founder", isBot: false },
        { name: "Naomi", role: "", isBot: false },
        { name: "Camperbot", role: "Bot", isBot: true },
      ],
      "isBot"
    );

    expect(result).toBeFalsy;
  });

  test("for all isBot true in collection should return true.", () => {
    let result = truthCheck(
      [
        { name: "Quincy", role: "Founder", isBot: true },
        { name: "Naomi", role: "", isBot: true },
        { name: "Camperbot", role: "Bot", isBot: true },
      ],
      "isBot"
    );

    expect(result).toBeTruthy;
  });

  test("for isNOTBot not in collection should return false.", () => {
    let result = truthCheck(
      [
        { name: "Quincy", role: "Founder", isBot: true },
        { name: "Naomi", role: "", isBot: true },
        { name: "Camperbot", role: "Bot", isBot: true },
      ],
      "isNOTBot"
    );

    expect(result).toBeFalsy;
  });
});
