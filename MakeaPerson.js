// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method.
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

const Person = function (firstAndLast) {
  (this.fullname = firstAndLast),
    (this.getFullName = function () {
      return this.fullname;
    }),
    (this.getLastName = function () {
      let wordArr = this.fullname.split(" ");
      return wordArr[1];
    }),
    (this.getFirstName = function () {
      let wordArr = this.fullname.split(" ");
      return wordArr[0];
    }),
    (this.setFirstName = function (first) {
      let wordArr = this.fullname.split(" ");
      let newArr = [[first], wordArr[1]];
      console.log("setLastName", newArr.join(" "));
      this.fullname = newArr.join(" ");
    }),
    (this.setLastName = function (last) {
      let wordArr = this.fullname.split(" ");
      let newArr = [wordArr[0], [last]];
      //console.log("setLastName", newArr.join(" "))
      this.fullname = newArr.join(" ");
    }),
    (this.setFullName = function (fullName) {
      this.fullname = fullName;
    });
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());
//console.log(bob.getLastName());
//console.log(bob.getFirstName());
console.log(Object.keys(bob).length);
//bob.setLastName("Curry");
//console.log(bob.getFullName());

//bob.setFirstName("Haskell");
//console.log(bob.getFullName());

bob.setFullName("Haskell Curry");
console.log(bob.getFullName());
console.log(bob.getLastName());
console.log(bob.getFirstName());
