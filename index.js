console.log('Before');
// console.log(get_user(1));
get_user(1, user_callback);
console.log('After');

// function get_user(id){
//   setTimeout(() => {
//     console.log("Reading from DB...");
//   }, 2000);
// }

function get_user(id, callback){
  setTimeout(() => {
    console.log("Reading from DB...");
    callback({id: id, name: 'some_name'});
  }, 2000);
}

function get_repos(username, callback){
  setTimeout(() => {
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}

function repo_callback(repos){
  console.log("Repos: " + repos);
}

function user_callback(user){
  console.log("Name: " + user.name);
  get_repos(user.name, repo_callback);
}