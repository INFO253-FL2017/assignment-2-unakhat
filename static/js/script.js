// utility functions for localstorage



function send() {
    var missing = '';
    var pop = document.getElementById('pop');
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('msg').value;
    if (name == '') {
        missing += "Name,";
    }
    if (email == '') {
      missing += "Email,";
    }
    if (subject == '') {
        missing += "Subject,";
    }
    if (message == '') {
        missing += "Message,";
    } 
    if (pop.hidden) {
        pop.hidden = false;
    }
    if (missing != '') {
        pop.innerHTML = "Fields " + missing.substr(0, missing.length-1) + " are empty";
    } 
    else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 204) {
                pop.innerHTML = "Hi " + name + ", your message has been sent";
            }
        };
        xhttp.open("POST", "/f", true);
        xhttp.send('{"name":"' + name + '","email":"' + email + '","subject":"' + subject + '","msg":"' + message + '"}')
    }
   
}

function setObject(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function getObject(key) {
  var storage = window.localStorage,
      value = storage.getItem(key);
  return value && JSON.parse(value);
}
function clearStorage() {
  window.localStorage.clear();
}

// Clear inputfields and localstorage
function clearComment(){
  $('#txt1').val('');
  $('#namebox').val('');
  clearStorage();
}

function saveComment(){

 
  var cText = document.getElementById("txt1").value;
      cName = document.getElementById("namebox").value;
      cmtList = getObject('cmtlist');

  if (cmtList){
    cmtList.push({name: cName, text: cText});
    setObject('cmtlist', cmtList);
  }else{ //Add a comment
    setObject('cmtlist', [{name: cName, text: cText}]);
  }

  bindCmt();
}

function bindCmt(){
  var cmtListElement = $('#cmtlist'),
      cmtList = getObject('cmtlist');

  //Out with the old
  cmtListElement.empty();
  //And in with the new
  $.each(cmtList, function(i, k){
    cmtListElement.append( $('<p><span>'+ k.name +'</span>'+ k.text +'</p>') );
  });
}

//Get the comments on page ready
$(function(){
  bindCmt();
});