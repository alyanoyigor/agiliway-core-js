const nameKey = { name: 'name' };
const ageKey = { age: 'age' };

// Map
const map = new Map();
map.set(nameKey, 'Oleksandr').get(nameKey); // 'Oleksandr'
map.set(ageKey, 20).get(ageKey); // 20

// Set
const set = new Set([1, 2, 3, 3, 4]);
set.add(2);
const uniqueNumbersArray = [...set];

//  destructuring, spread, rest,
const backlog = { backlog: [] };
const agileTable = {
  ...backlog,
  todo: ['1 start'],
  doing: ['2 doing'],
  done: ['3 end'],
};
const { todo, ...rest } = agileTable;
