# DSIintro

[![Build Status](https://travis-ci.com/dsi-icl/gdo-dsiintro.svg?branch=master)](https://travis-ci.com/dsi-icl/gdo-dsiintro)
[![Docker](https://img.shields.io/docker/pulls/datascienceinstitute/gdodsiintro.svg)](https://hub.docker.com/r/datascienceinstitute/gdodsiintro)

**DSIintro** is a visualisation with information about the Data Science Institute at Imperial College and its labs. 

While its contents can be viewed in any browser, it is optimized for its accurate display on the screens of the Data Observatory at the Institute. 

<p float="left">
<img src="https://github.com/dsi-icl/gdo-dsiintro/raw/master/static/img/snapshot1.jpg" alt="DSIintro at Imperial's Data Observatory" width="400px"/>
<img src="https://github.com/dsi-icl/gdo-dsiintro/raw/master/static/img/snapshot2.jpg" alt="DSIintro at Imperial's Data Observatory" width="400px"/>
</p>

## Installation

### Manual
This template requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies, and start the server.

```sh
git clone git@github.com:dsi-icl/dsiintro.git
cd dsiintro
npm install
node app.js
```

The app is now running in port 5000 of localhost.

### Docker
Alternatively, you can use docker
```sh
docker pull datascienceinstitute/gdodsiintro
docker run -d -p 5000:5000 --name gdo-dsiintro datascienceinstitute/gdodsiintro
```

The app is now running in port 5000 of localhost.

## How it works
**DSIintro** is composed by 6 webpages with static and dynamic contents. They are all connected through a socket.io. One of the webpages (at /control) is meant as a control panel; the other five (/0, /1, /2, /3 and /4) are meant to be displayed in five consecutive browsers.


## Contributors
* [Dr Miguel Molina-Solana](http://miguelmolina.me) (mmolinas@ic.ac.uk), development
* Dr Kai Sun, content
* Ms Pan Wang, designer
* [Senaka Fernando](https://github.com/senakafdo), development


## Contributing
Use this project as a template for your visualisations.
We also welcome pull request with improvements and suggestions!



## License
[MIT](LICENSE)
