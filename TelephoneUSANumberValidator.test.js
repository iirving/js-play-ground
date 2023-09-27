import telephoneCheck from "./TelephoneUSANumberValidator";

describe("test telephoneCheck function ", () => {
  test("function returns an boolean", () => {
    let result = telephoneCheck("555-555-5555");

    let type = typeof result;
    expect(type).toEqual("boolean");
  });

  test("1 555-555-5555 should return true.", () => {
    let result = telephoneCheck("1 555-555-5555");

    expect(result).toEqual(true);
  });

  let TestArray = [
    { value: "1 (555) 555-5555", expected: true },
    { value: "5555555555", expected: true },
    { value: "555-555-5555", expected: true },
    { value: "(555)555-5555", expected: true },
    { value: "1(555)555-5555", expected: true },
    { value: "1 555 555 5555", expected: true },
    { value: "1 456 789 4444", expected: true },
    { value: "555-5555", expected: false },
    { value: "5555555", expected: false },
    { value: "1 555)555-5555", expected: false },
    { value: "123**&!!asdf#", expected: false },
    { value: "55555555", expected: false },
    { value: "(6054756961)", expected: false },
    { value: "2 (757) 622-7382", expected: false },
    { value: "0 (757) 622-7382", expected: false },
    { value: "-1 (757) 622-7382", expected: false },
    { value: "2 757 622-7382", expected: false },
    { value: "10 (757) 622-7382", expected: false },
    { value: "27576227382", expected: false },
    { value: "(275)76227382", expected: false },
    { value: "2(757)6227382", expected: false },
    { value: "2(757)622-7382", expected: false },
    { value: "555)-555-5555", expected: false },
    { value: "(555-555-5555)", expected: false },
    { value: "(555-555-5555", expected: false },
    { value: "(555)5(55?)-5555", expected: false },
    { value: "55 55-55-555-5", expected: false },
    { value: "11 555-555-5555", expected: false },
  ];

  test.each(TestArray)(
    `$value should return $expected`,
    ({ value, expected }) => {
      let result = telephoneCheck(value);
      expect(result).toBe(expected);
    }
  );
});
