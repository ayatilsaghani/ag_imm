let mybutton = document.getElementById("myBtn");
 window.onscroll = function() {scrollFunction()};
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }

 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
var users = [{ },{  } ]
  function add(){
var userNom = document.getElementById('nom').value;
var userPrenom = document.getElementById('prenom').value;
var userMessage = document.getElementById('message').value;
var userMail = document.getElementById('email').value;

 if(userPrenom == ''){
    document.getElementById('s2').innerHTML = 'remplir le  prenom';
    return false;
}
else if(userNom== ''){
    document.getElementById('s2').innerHTML = 'remplir nom';
    return false;
}
else if(userMail== ''){
    document.getElementById('s2').innerHTML = 'remplir email';
    return false;
}
else if(userMessage == ''){
    document.getElementById('s2').innerHTML = 'remplir votre message';
    return false;
}
else{
  document.getElementById('s3').innerHTML = 'nous vous contacterons';
    var user ={};
    user.nom = userNom;
    user.prenom= userPrenom;
    user.mail=userMail;
    user.message=userMessage;
    users.push(user);
    console.log(users)
}
}
function countWords() {
          var message = document.getElementById('message').value;
          var wordCount = message.split(/\S+/).length - 1;
          var wordCountElement = document.getElementById('word-count');
          wordCountElement.textContent = wordCount + '/30 mots';

          if (wordCount > 30) {
              document.getElementById('message').value = message.split(/\s+/).slice(0, 30).join(" ");
              wordCountElement.textContent = '30/30 mots';
          }
      }