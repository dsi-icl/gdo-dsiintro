# DSIintro
**DSIintro** is a visualisation with information about the Data Science Institute at Imperial College and its labs. 

While its contents can be viewed in any browser, it is optimized for its accurate display on the screens of the Data Observatory at the Institute. 

![DSIintro at Imperial's Data Observatory](https://github.com/miguems/dsiintro/raw/master/src/common/images/photo.jpg "DSIintro at Imperial's Data Observatory")



## Installation

### Manual
This template requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies, and start the server.

```sh
$ git clone git@github.com:miguems/dsiintro.git
$ cd dsiintro
$ npm install
$ node app.js
```

The app is now running in port 4200 of localhost.

### Docker
Alternatively, you can use docker
```sh
$ docker build -t dsiintro -f Dockerfile .
$ docker run -d -p 4200:4200 --name dsiintro dsiintro
```

The app is now running in port 4200 of localhost.

## How it works
**DSIintro** is composed by 6 webpages with static and dynamic contents. They are all connected through a socket.io. One of the webpages (at /control) is meant as a control panel; the other five (/0, /1, /2, /3 and /4) are meant to be displayed in five consecutive browsers.


## Contributors
* Dr Miguel Molina-Solana (mmolinas@ic.ac.uk), development
* Dr Kai Sun, content
* Ms Pan Wang, designer


## Contributing
Use this project as a template for your visualisations.
We also welcome pull request with improvements and suggestions!



## License
[MIT](https://github.com/miguems/dsiintro/blob/master/LICENSE.md)