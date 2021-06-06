# Tweetia :bird:

### :warning: Tweetia is in (semi)active development. Expect bugs. Pull requests are welcome!

## Introduction

Tweetia is a (wip) simple Twitter Client built in Reactjs as a front-end and Python/Flask as a backend.

![Screenshot](https://pbs.twimg.com/media/E2w-cApWEAATLkD?format=jpg&name=large)

### How does it work?

Tweetia uses Flask to handle all the API calls through the `backend.py` file.

The frontend is built off JS and React, making it simple to add new components and functions.

## Usage

Tweetia is relatively simple to run.

### Prerequisites

- A Twitter Developer Account
- Python (version 3.8 is tested, not sure about 3.9+)
- NodeJS
- Git (obviously)

### Setup

1. Create a Twitter API Application (**make sure you make a v1.1 app!**)
   - Make sure you give the app Read/Write permissions
   - Note down the API Keys and consumer keys.
2. Create a `config.py` file in the directory containing the `backend.py` file, and fill out this template, replacing the variable values accordingly:

   ```
   apikey = "API_KEY_HERE"
   apisecret = "API_SECRET_HERE"
   bearer = "BEARER_TOKEN"
   at = "ACCESS_TOKEN_HERE"
   ats = "ACCESS_TOKEN_SECRET_HERE"
   ```

3. Install all the Python packages using `pip install -r requirements.txt` (Installing into a Virtual Environment is a good idea, but isn't required)
4. Install all NodeJS packages using the `npm install` command in the folder containing the `package.json`.

5. Setup is done! It's time to run Tweetia.

### Running

1. Run the `backend.py` file with Python.
2. On the same machine *in a different terminal*¹, run `npm start` to run the React app. This
3. You're done! Go to the IP provided by the NodeJS terminal to see the app!

## Other Notes

- Pull requests for bugfixes and feature requests are welcome and highly appreciated!
- If you are going to use code from this projet, you MUST credit either me or [this repo](https://github.com/SmatMan/tweetia).

## Footnotes

¹ The programs _can_ be run on a different machine if you mess with the IPs in the App.js file, but official support is coming at a later date.
