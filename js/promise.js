const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber < 50) {
    return resolve(randomNumber);
  }
  reject(new Error('Something went wrong!'));
});

promise
  .then((number) => {
    // console.log(number);
    return number + 1;
  })
  .then((number) => {
    // console.log(number);
    return number + 1;
  })
  .then((number) => {
    // console.log(number);
  })
  .catch((error) => {
    console.error(error);
  });

let isLoading = false;

const getTodo = async (todoNumber) => {
  try {
    isLoading = true;
    const request = fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoNumber}`
    );
    const response = await request;
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading = false;
  }
};

const todoRequests = Array.from(Array(3), (_, index) => getTodo(index + 1));

Promise.all(todoRequests).then((data) => data);
Promise.allSettled(todoRequests).then((data) => data);
Promise.race(todoRequests).then((data) => data);
Promise.any(todoRequests).then((data) => data);

const promiseWorkExample = () => {
  console.log(1);

  setTimeout(() => console.log(2), 5000);

  Promise.resolve(console.log(3));

  new Promise((resolve, reject) => resolve())
    .then(() => console.log(5))
    .then(() => console.log(6));

  queueMicrotask(() => console.log(4));

  console.log(7);
};

// promiseWorkExample();
