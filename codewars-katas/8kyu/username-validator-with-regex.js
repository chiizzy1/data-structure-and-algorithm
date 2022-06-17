function validateUsr(username) {
    return username.length >= 4
      && username.length <= 16
      && (username.match(/[a-z]|_|\d/g).length === username.length);
  }