const http = new easyHTTP;


// GET POSTS
/* http.getPosts('https://jsonplaceholder.typicode.com/posts', function (posts, err) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
}); */

// Create data
const data = {title: 'Data one',
              body: 'Hovno'};

// Make an post request
/* http.setPost('https://jsonplaceholder.typicode.com/posts', data, function(err, suc) {
  if (err) {
    console.log('Chyba');
    
  } else {
    console.log(suc);
  }
    
})
 */
// Make an PUT request

/* http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
  if (err) {
    console.log('Chyba');
    
  } else {
    console.log(post);
  }
}); */

// DELETE Request
 http.deletePost('https://jsonplaceholder.typicode.com/posts/1', function (posts, err) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});
