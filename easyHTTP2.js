class easyHTTPv2 {
  // Make an HTTP GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data)).catch(err => reject(err));
    });
  }

  // Make an HTTP POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data)).catch(err => reject(err));
    });
  }

  // PUT request
  // Make an HTTP PUT request
  put(url, DATA) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'put',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)

      })
        .then(res => res.json())
        .then(data => resolve(data)).catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(() => resolve('DELETED'))
        .catch(err => reject(err));
    });
  }
}