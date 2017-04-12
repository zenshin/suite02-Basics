
////
var xhr = new XMLHttpRequest();
var posts = document.getElementById("#posts");

if (xhr) {


  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        for (i = data.length - 3; i < data.length; i++) {


            posts.innerHTML += data[i];
        }
      } else {
        alert('Une erreur s’est produite.');
      }
    }
  };

  xhr.open('GET', 'http://www.server.fr/users/55');
  xhr.send();
}
