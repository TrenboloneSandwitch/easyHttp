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

}

