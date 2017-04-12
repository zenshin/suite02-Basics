var xhr = new XMLHttpRequest();


if (xhr) {


  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        alert(JSON.stringify(data));
      } else {
        alert('Une erreur s’est produite.');
      }
    }
  };

  xhr.open('GET', 'http://192.168.23.96:3000/posts/36');
  xhr.send();
}
