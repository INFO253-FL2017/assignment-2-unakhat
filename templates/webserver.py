from flask import Flask, request, render_template
app = Flask(__name__,static_url_path="/static")

quote_db = {
  'sunday': "Life is about making an impact, not making an income. \
  –Kevin Kruse",
  'monday': "Whatever the mind of man can conceive and believe, it can achieve. \
  –Napoleon Hill",
  'tuesday': "Strive not to be a success, but rather to be of value. \
  –Albert Einstein",
  'wednesday': "You miss 100% of the shots you don’t take. \
  –Wayne Gretzky",
  'thursday': "Every strike brings me closer to the next home run. \
  –Babe Ruth",
  'friday': "We become what we think about. \
  –Earl Nightingale",
  'saturday': "Life is what happens to you while you’re busy making other plans. \
  –John Lennon",
}
					
GRAND EXAMPLE
webserver.py (2/2)

@app.route('/')
def quote_of_the_day():
  day_of_week = request.args.get('day_of_week')
  return render_template(
    "index.html",
    day=day_of_week,
    quote=quote_db[day_of_week])
					
GRAND EXAMPLE
templates/index.html (1/2)

<html>
    <head>
        <title>Homepage</title>
        <link rel='stylesheet' href='/static/style.css' />
    </head>
    <body>
        <h1>This is the home page!</h1>

        <p>The quote for {{day}} is: {{quote}}</p>
        <br />
        
@app.route('/')
def quote_of_the_day():
  day_of_week = request.args.get('day_of_week')
  return render_template(
    "index.html",
    day=day_of_week,
    quote=quote_db[day_of_week])