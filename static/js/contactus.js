function send() {
    var empty = '';
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('msg').value;
    var pop = document.getElementById('pop');
    if (name == '') {
        empty += "Name,";
    }
    if (email == '') {
      empty += "Email,";
    }
    if (subject == '') {
        empty += "Subject,";
    }
    if (message == '') {
        empty += "Message,";
    } 
    if (pop.hidden) {
        pop.hidden = false;
    }
    if (empty != '') {
        pop.innerHTML = "Fields " + empty.substr(0, empty.length-1) + " are empty";
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