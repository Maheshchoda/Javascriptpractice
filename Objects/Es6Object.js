class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class School extends Student {
  constructor(name, age, sex) {
    super(name, age);
    this.sex = sex;
    console.log(
      `Hello this is ${this.name} and my age is ${this.age} and i am ${
        this.sex
      }`
    );
  }
}

const KMS = new School(`Mahesh`, 21, `Male`);
