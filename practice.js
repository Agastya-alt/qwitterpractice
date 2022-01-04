const firebaseConfig = {
    apiKey: "AIzaSyAuoOzx3fi-X12E1Yps0_-3x3-8N4-hyXY",
    authDomain: "kwitterpractice-ab2d3.firebaseapp.com",
    databaseURL: "https://kwitterpractice-ab2d3-default-rtdb.firebaseio.com",
    projectId: "kwitterpractice-ab2d3",
    storageBucket: "kwitterpractice-ab2d3.appspot.com",
    messagingSenderId: "751669190153",
    appId: "1:751669190153:web:5f8d3df2491209b0cae2d8"
  };
  

  firebase.initializeApp(firebaseConfig);


  function addUser(){
      user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({

    purpose: "adding user"
});
 
  }