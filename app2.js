const http = new easyHTTPv2;

/* http.get('https://jsonplaceholder.typicode.com/users')
.then(data => {
  data.forEach((name) => console.log(name.name));
})
.catch(err => console.log(err)); */

// USer data
const data = {
  name: 'John',
  username: 'johnjohn',
  email: 'jdoe@sss.cz'
}
// Create Post
/* http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err)); */

/* // Update Post
http.put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err)); */

  // DElete Post
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));