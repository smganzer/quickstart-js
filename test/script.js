window.addEventListener("load", function(){

  var signInButton = document.getElementById("sign-in-button");
  var signOutButton = document.getElementById("sign-out-button");

  signInButton.addEventListener("click", function(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
  });

  signOutButton.addEventListener("click", function(){
      firebase.auth().signOut();

      console.log("sign out")
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(user.displayName);
    } else {
      // User is signed out.
      console.log("User Logged Out")
    }
  });


});
