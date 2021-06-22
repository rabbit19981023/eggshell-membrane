## Usage
Before you open the website, you have to do things below:

1. check if `python`, `nodejs` are already installed in your local machine. If not:
- go to official [Python](https://www.python.org/) download and install it.
- go to official [Nodejs](https://nodejs.org/en/) download and install it.

2. compile all .ts files to .js
- run `cd /path/to/this-project-directory` and `npm run build-netlify`

3. run a simple Server in your local machine
- run `cd /path/to/this-project-directory` and `python -m http.server 8000`

4. open a browser with `localhost:8000`, it should be all things work!
- Warning: you should not open `./assets/index.html` directly. We need `http://` to make sure all things working as expected, rather than `file:///`
