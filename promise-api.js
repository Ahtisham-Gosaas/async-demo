//Already resolved promise
// const accepted = Promise.resolve({id: 1, name: 'ahtisham'});
// accepted.then(user => console.log('User: ', user));

// //Already rejected promise
// const rejected = Promise.reject(new Error('Reason for rejection'));
// rejected.catch(error => console.log(error));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1...');
    resolve({id: 1, name: 'name1'});
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2...');
    resolve({id: 2, name: 'name2'});
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 3...');
    reject(new Error('Error: some error occured'));
  }, 2000);
});


//Parallel execution of asynchronous code
// Promise.all([p1, p2]).then(result => console.log(result));

//Different behavior as compared to first one
// Promise.all([p1, p2, p3]).catch(result => console.log(result));

//Again different behavior
Promise.race([p1, p2, p3]).then(result => console.log(result));