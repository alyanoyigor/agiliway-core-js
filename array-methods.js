const userList = [
  { name: 'Alex', age: 18 },
  { name: 'Ann', age: 25 },
  { name: 'John', age: 29 },
  { name: 'Alice', age: 35 },
  { name: 'Chris', age: 16 },
];
let copyUserList = [...userList];
const newUser = { name: 'Kate', age: 23 };

// pop, push, shift, unshift
copyUserList.push(newUser); // 6
const endOfListDeletedEUser = copyUserList.pop(); // { name: 'Kate', age: 23 }

copyUserList.unshift(newUser); // 6
const startOfListDeletedUser = copyUserList.shift(); // { name: 'Alex', age: 18 }

// splice
copyUserList = [...userList];
const startUserIndex = 0;
const deletedUsersAmount = 2;
const deletedUsers = copyUserList.splice(
  startUserIndex,
  deletedUsersAmount,
  newUser
); // [ { name: 'Alex', age: 18 }, { name: 'Ann', age: 25 } ]
/*
[
  { name: 'Kate', age: 23 },
  { name: 'John', age: 29 },
  { name: 'Alice', age: 35 },
  { name: 'Chris', age: 16 },
];
*/

// slice
const endUserIndex = 3;
const slicedUserList = userList.slice(startUserIndex, endUserIndex);
/*
[
  { name: 'Alex', age: 18 },
  { name: 'Ann', age: 25 },
  { name: 'John', age: 29 }
];
*/

// concat
const newUserList = [
  { name: 'Amelie', age: 27 },
  { name: 'Bob', age: 36 },
];
const extendedUserList = userList.concat(newUserList); // [ ...userList, ...newUserList ];

// forEach
const showUserData = (user) => {
  return `${user.name} - ${user.age}`;
};
userList.forEach((user) => showUserData(user.name));

// indexOf, lastIndexOf, includes
const numbersArray = [1, 2, 7, 5, 8, 3, 100, 2, 12];
numbersArray.indexOf(2); // 1
numbersArray.lastIndexOf(2); // 7
numbersArray.includes(8); // true

// find, findIndex
const findUserCallback = (user) => user.name === 'Alex';
const searchedUser = userList.find(findUserCallback); // { name: 'Alex', age: 18 }
const searchedUserIndex = userList.findIndex(findUserCallback); // 0

// filter
const adultAge = 18;
const adultUsers = userList.filter((user) => user.age >= adultAge);

// map
const userListWithId = userList.map((user, index) => ({
  ...user,
  id: `user-${index}`,
}));
const userNameList = userList.map((user) => user.name);

// sort
const sortUsers = (firstUser, secondUser, option) => {
  if (firstUser[option] > secondUser[option]) {
    return 1;
  }
  if (firstUser[option] < secondUser[option]) {
    return -1;
  }
  return 0;
};

copyUserList = [...userList];
copyUserList.sort((firstUser, secondUser) =>
  sortUsers(firstUser, secondUser, 'age')
);
copyUserList.sort((firstUser, secondUser) =>
  sortUsers(firstUser, secondUser, 'name')
);

// reverse
copyUserList.reverse();

// split, join
const userNames = userNameList.join(',');
const firstTwoUserNameList = userNames.split(',', 2);

// reduce, reduceRight
const usersTotalAge = userList.reduce(
  (accumulator, user) => accumulator + user.age,
  0
);

// some, every
const isExistUser = userList.some((user) => user.name === 'Alex'); // true
const isAllUsersAreAdult = userList.every((user) => user.age > adultAge); // false
