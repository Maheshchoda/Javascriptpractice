const NinjaList = {
  Ninjas: [],
  get ninja() {
    console.log(`Getting the value from the ninja`);
    console.log(this.Ninjas[0]);
  },
  set ninja(value) {
    console.log(`Setting the value for the Ninja`);
    this.Ninjas[0] = value;
  }
};

// NinjaList.ninja = `Mahesh`;
// NinjaList.ninja === `Mahesh`;
// NinjaList.ninja = `Ramesh`;
// NinjaList.ninja === `Ramesh`;

//get and set methods with the Object.defineProperty

class StudentList {
  constructor() {
    let list = 0;
    Object.defineProperty(this, `studentList`, {
      get: () => {
        console.log(`Accesed the list`);
        console.log(list);
      },
      set: value => {
        console.log(`Setting the list`);
        list = value;
      }
    });
  }
}

const Mahesh = new StudentList(`Mahesh`);
//
// Mahesh.list;
// Mahesh.studentList = `Mahesh`;

//Now having fun with the functionality of the getter and the setter function

class evenorOdd {
  constructor() {
    let valuee = 0;
    Object.defineProperty(this, `number`, {
      get: () => {
        console.log(`Acessed the number`);
        console.log(valuee);
        return valuee;
      },
      set: value => {
        if (!Number.isInteger(value)) {
          throw new TypeError(`Please enter a number`);
        } else {
          console.log(`Setting the value`);
          valuee = value;
        }
      }
    });
  }
}

let Two = new evenorOdd();
Two.number = 2;
try {
  Two.number = 2;
  fail("Should not be here");
} catch (e) {
  pass("Setting a non-integer value throws an exception");
}
