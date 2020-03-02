# Adapted from [Web Extension Starter](https://github.com/ymdevs/Web-Extension-Starter) 

This is a Chrome Extension for amazing chrome hacking (filtering request and repsonse headers, communicating with nodejs backend, satisfying your curiosity, etc...). 

It is built and extended using Typescript, React, Redux, and will soon support an asynchronous websocket based communication protocol which will allow external clients to acces chrome internal functionality. 

See [Web Extension Starter](https://github.com/ymdevs/Web-Extension-Starter) for original project specification. Source code has been heavily modified as described above. 

### Good to know before using:
* [Typescript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [redux](https://redux.js.org/)

### Requirements:
* [NodeJS](https://nodejs.org/en/) - Javascript runtime
* [Chrome](https://www.google.com/chrome/) or [Firefox](https://www.mozilla.org/en-US/firefox/) - Web browser

### How to run:
#### In terminal or command prompt

```
install dependencies
 - npm install
Transpile the code
 - npm run dev (only transpiles the code)
 - npm run watch (transpiles and watches for code changes)


yarn commands will work too if yarn is installed.
```

### In Chrome web browser
1. Go to: [**chrome://extensions**](chrome://extensions)
2. Toggle: "**developer mode**" on.
3. Click on: "**Load unpacked**"
4. Select the newly created folder "**dist**" from the project folder.
5. Thats it.

### In Firefox web browser
1. Go to: [**about:debugging**](about:debugging)
2. Select: "**Enable add-on debugging**"
3. Click on: "**Load Temporary Add-on…**"
4. Open the newly created folder "**dist**" from the project folder, and choose the "**manifest.json**" file.
5. Thats it.

## License
MIT
