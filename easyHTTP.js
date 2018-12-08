class easyHTTP {
  constructor() {
    this.http = new XMLHttpRequest;
  }

  getPosts(url, callback) {
    this.http.open('GET', url, true);

    // Přiřadit tenhle scoope do proměnný
    let self = this;
    this.http.onload = function () {
      if (self.http.status === 200) {
        callback(self.http.responseText, null);
      } else {
        callback(undefined, 'Chyba ' + self.http.status);
      }
    }

    this.http.send();
  }

  // Create new post
  setPost(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
      callback(null, self.http.responseText)
    }
    this.http.send(JSON.stringify(data));
  }

  // PUT request
  put(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
      callback(null, self.http.responseText)
    }
    this.http.send(JSON.stringify(data));
  }

  deletePost(url, callback) {
    this.http.open('DELETE', url, true);

    // Přiřadit tenhle scoope do proměnný
    let self = this;
    this.http.onload = function () {
      if (self.http.status === 200) {
        callback('deleted', null);
      } else {
        callback(undefined, 'Chyba ' + self.http.status);
      }
    }

    this.http.send();
  }

}



