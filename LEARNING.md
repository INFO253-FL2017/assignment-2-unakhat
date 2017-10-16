What is the function of the following technologies in your assignment:
HTML
HTML stands for Hyper Text Markup Language .It is used to display the content in the website with various styling is added on top of it.

CSS- CSS is used in our assignment to align the html elements to make the web app looks presentable.It provides styling to the page like color, indent , size.

JavaScript- Javascript is a dynamic computer programming language.t is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.

Python-Python is an object-oriented, high level language, interpreted, dynamic and multipurpose programming language.


Flask
Flask is a popular, extensible web microframework for building web applications with Python
The Hypertext Transfer Protocol (HTTP) is an application protocol for distributed, collaborative, and hypermedia information systems.Hypertext Transfer protocol. 

GET and POST requests
 GET-Requests data from a specified resource
POST - Submits data to be processed to a specified resource

How does HTML, CSS, and JavaScript work together in the browser for this assignment?
HTML is used to display the content in the browser , CSS provides styling to it and JavaScript is used for dynamic interactivity in websites.
HTML – html tags are used to create structure of webpages
CSS – It is used for placement (alignment and indentation) and styling (size of text, color, background color) of html elements
JavaScript – It adds interactivity to the html static webpages. In out assignment it is ued to handle validations on contact us page and comment functionality on blog pages.


How does Python and Flask work together in the server for this assignment?
Flask  is the prototype used to create instances of web application using Python programming language.
Python is used to write to logic which Flask uses to handle requests and send out responses.


List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request

GET:
127.0.0.1 - - [15/Oct/2017 22:01:14] "GET /index HTTP/1.1" 200 -It is used to lead to homepage. 
127.0.0.1 - - [15/Oct/2017 22:02:08] "GET /contact HTTP/1.1" 200 - It is used to go to contact us.
127.0.0.1 - - [15/Oct/2017 22:01:55] "GET /about HTTP/1.1" 200 - It leads to go to about us page.

127.0.0.1 - - [15/Oct/2017 22:01:45] "GET /blog/8-experiments-in-motivation HTTP/1.1" 200 -
It leads to blog 1
127.0.0.1 - - [15/Oct/2017 22:05:55] "GET /blog/a-mindful-shift-of-focus HTTP/1.1" 200 -
It leads to blog 2
127.0.0.1 - - [15/Oct/2017 22:02:34] "GET /blog/how-to-develop-an-awesome-sense-of-direction HTTP/1.1" 200 - It leads to blog 3

127.0.0.1 - - [15/Oct/2017 22:02:36] "GET /blog/training-to-be-a-good-writer HTTP/1.1" 200 -
It leads to blog 4

127.0.0.1 - - [15/Oct/2017 22:02:40] "GET /blog/what-productivity-systems-wont-solve HTTP/1.1" 200 -
It leads to blog 5


POST :
127.0.0.1 - - [15/Oct/2017 22:06:38] "POST /f HTTP/1.1" 204 - It sends the the request to the mailgun api.
