console.log('Before');
// get_user(1)
//   .then((user) => get_repos(user.name))
//   .then((repos) => console.log(repos))
//   .catch((err) => console.log('Error: ', err.message));

display_repos();
console.log('After');

function get_user(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading from DB...");
      resolve({id: id, name: 'some_name'});
      // reject(new Error('error'));
    }, 2000);
  });
  
}

function get_repos(username){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['repo1', 'repo2', 'repo3']);
      // reject('some error message');
    }, 2000);
  });
}

async function display_repos(){
  const user = await get_user(1);
  const repos = await get_repos(user.name);
  console.log('Repos', repos);
}