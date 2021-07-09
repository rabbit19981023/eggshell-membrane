## Usage
Before you open the website, you have to do things below:

1. check if `nodejs`, `http-server` are already installed in your local machine. If not:
- go to official [Nodejs Website](https://nodejs.org/en/), download and install it.
- run `npm install --global http-server` to install a simple but really powerful Http Server.

2. using `tsc` to compile all .ts files to .js, and using `webpack` to bundle all js&css files into one file.
- run `cd /path/to/this-project-directory` and `npm run build-netlify`

3. run a simple Server in your local machine
- run `cd /path/to/this-project-directory` and `http-server --port 3000  `

4. open a browser with `localhost:3000`, it should be all things work!
- Warning: you should not open `./assets/index.html` directly. We need `http://` to make sure all things working as expected, rather than `file:///`

Update 2021/06/27 : 

Something might not be showable, because we have a third-party service like `GraphCMS` to host our dynamic data. In view of security issues, we will not reveal API key to access DB. 

