var coder = {
    name: "Muhammad",
    age: 32,
    languages: ["Js", "python", "Ruby"],
    coderFriends: [
      {
        name: "hesus",
        age: 11,
        gender: "male",
        active: true,
        alive: true,
        hairColor: "black",
        showSize: 22,
        ssn: "122-33-44",
        languages: [
          {
            codingLanguages: "js",
            selfTaught: true
          }
        ]
      }
    ],
    nonCoderFriends: [
      {
        name: "jamal",
        age: 23,
        gender: "female",
        active: true,
        alive: true,
        hairColor: "brown",
        showSize: 22,
        ssn: "122-33-44"
      }
    ],
    familyThatAreCoders: [
      {
        name: "sam",
        age: 11,
        gender: "female",
        active: true,
        alive: true,
        hairColor: "blonde",
        showSize: 22,
        ssn: "122-33-44"
      }
    ],
    familyThatAreNotCoders: [
      {
        name: "jam",
        age: 23,
        gender: "female",
        active: true,
        alive: true,
        hairColor: "red",
        showSize: 22,
        ssn: "122-33-44"
      }
    ],
    someInfo: function() {
      return this.name + " " + this.age;
    }
  };
  