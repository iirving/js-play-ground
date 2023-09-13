import Person from "./MakeaPersonClass";

describe("test Person class ", () => {
  test("testing getFullName method", () => {
    let bob = new Person("Bob Ross");

    expect(bob.getFullName()).toBe("Bob Ross");
  });

  test("testing getLastName method", () => {
    let bob = new Person("Bob Ross");

    expect(bob.getLastName()).toBe("Ross");
  });

  test("testing getFirstName method", () => {
    let bob = new Person("Bob Ross");

    expect(bob.getFirstName()).toBe("Bob");
  });

  test("testing setLastName method only changes last name", () => {
    let bob = new Person("Bob Ross");
    bob.setLastName("Curry");

    expect(bob.getFullName()).toBe("Bob Curry");
    expect(bob.getFirstName()).toBe("Bob");
    expect(bob.getLastName()).toBe("Curry");
  });

  test("testing setFirstName method only changes first name", () => {
    let bob = new Person("Bob Ross");
    bob.setFirstName("Haskell");

    expect(bob.getFullName()).toBe("Haskell Ross");
    expect(bob.getFirstName()).toBe("Haskell");
    expect(bob.getLastName()).toBe("Ross");
  });

  test("testing setFullName method", () => {
    let bob = new Person("Bob Ross");

    bob.setFullName("Haskell Curry");

    expect(bob.getFullName()).toBe("Haskell Curry");
    expect(bob.getFirstName()).toBe("Haskell");
    expect(bob.getLastName()).toBe("Curry");
  });
});
