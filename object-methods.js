class Car {
  constructor(type, model = '1', color = 'white') {
    this.type = type;
    this.model = model;
    this.color = color;
  }
}

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const fiatCar = new Car('Fiat', '500');

// Object.assign
const copyFiatCar = Object.assign({}, fiatCar);

// Object.create
const defaultCarData = { canRide: true, wheels: 4, helm: 1 };
const bmwCar = Object.create(defaultCarData);
bmwCar.canRide; // true

// Object.defineProperty
Object.defineProperty(bmwCar, 'type', {
  value: 'BMW',
  writable: true,
  enumerable: true,
  configurable: true,
}); // { type: 'BMW' }

// Object.getOwnPropertyDescriptor
const typeBMWDescriptor = Object.getOwnPropertyDescriptor(bmwCar, 'type');
/* { value: 'BMW', writable: true, enumerable: true, configurable: true, } */

// Object.preventExtensions, Object.isExtensible
const teslaCar = new Car('Tesla');
Object.preventExtensions(teslaCar);
delete teslaCar.model;
teslaCar.isMove = true;
/* { type: 'Tesla', color: 'white' } */
Object.isExtensible(teslaCar); // true

// Object.seal, Object.isSealed
const nissanCar = new Car('Nissan');
Object.seal(nissanCar);
nissanCar.type = 'NN';
delete nissanCar.type;
nissanCar.isMove = true;
/* { type: 'NN', model: '1', color; 'white' } */
Object.isSealed(nissanCar); // true

// Object.freeze, Object.isFrozen
const bentleyCar = new Car('Bentley');
Object.freeze(bentleyCar);
bentleyCar.type = 'BentleyCar';
delete bentleyCar.type;
bentleyCar.isMove = true;
/* { type: 'Bentley', model: '1', color; 'white' } */
Object.isFrozen(bentleyCar); // true

// Object.keys, Object.values, Object.entries, Object.fromEntries
const fiatCarKeys = Object.keys(fiatCar); // ['type', 'model', 'color']
const fiatCarValues = Object.values(fiatCar); // ['Fiat', '500', 'white']
const fiatCarEntries = Object.entries(fiatCar); // [['type', 'Fiat'], ['model', '500'], ['color', 'white']]
Object.fromEntries(fiatCarEntries); // { type: 'Fiat', model: '500', color; 'white' }

// Object.getOwnPropertyNames
const fiatCarKeyNames = Object.getOwnPropertyNames(fiatCar); // ['type', 'model', 'color']

// hasOwnProperty, Object.hasOwn
bmwCar.hasOwnProperty('canRide'); // false
bmwCar.hasOwnProperty('type'); // true
Object.hasOwn(bmwCar, 'canRide'); // false
Object.hasOwn(bmwCar, 'type'); // true

// Object.is
Object.is(null, null); // true
const foo = { a: 1 };
const bar = { a: 1 };
Object.is(foo, foo); // true
Object.is(foo, bar); // false

// isPrototypeOf
const firstPerson = new Human('Alex', 20);
Car.prototype.isPrototypeOf(firstPerson); // false
Car.prototype.isPrototypeOf(fiatCar); // true

// propertyIsEnumerable
bmwCar.propertyIsEnumerable('type'); // true
bmwCar.propertyIsEnumerable('canRide'); // false

// Object.setPrototypeOf
Object.setPrototypeOf(firstPerson, Car.prototype);

// toLocaleString
bmwCar.toLocaleString(); // [object Object]

// toString, valueOf
const user = {
  name: 'John',
  age: 18,

  toString() {
    return this.name;
  },

  valueOf() {
    return this.money;
  },
};
const userAge = Number(user); // 18
const userName = String(user); // 'John'
