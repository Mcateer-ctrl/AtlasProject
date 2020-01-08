var mainApp = {};

(function () {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      uid = user.uid;

    } else {
      //redirect to login page
      window.location.replace("login.html")
      uid = null
    }
  });

  function logOut() {
    firebase.auth().signOut()
      .then(function () {
        window.location.replace("login.html")
      }).catch(function (error) {
        // An error happened.
        console.error("Log out was not sucessful")
      });
  }

  mainApp.logOut = logOut;
})()

