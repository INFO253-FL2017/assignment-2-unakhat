window.onload = function ()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("weather").innerHTML = myObj.list[1].main.temp+" "+myObj.city.country;
        }
    };
    xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=5327684&appid=49bf666a2f30d03ec49624aafc39b5a8", true);
    xmlhttp.send();
/*    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://api.openweathermap.org/data/2.5/forecast?id=5327684&appid=49bf666a2f30d03ec49624aafc39b5a8", false ); // false for synchronous request
    xmlHttp.send( null );
    var data = JSON.parse(xmlHttp.responseText);
    document.getElementById("weather").innerHTML = data.name;        */
}
