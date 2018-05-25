const https = require('https');

if (!process.env.TOKEN || !process.env.REPO_SLUG) {
  console.log('no token/repo_slug provided');
  process.exit(1);
}

var auth = 'token ' + process.env.TOKEN;

var createBuild = function(callback) {
  var requestPath = '/repo/' + process.env.REPO_SLUG  + '/requests';
  var options = {
    host: 'api.travis-ci.com',
    port: 443,
    path: requestPath,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Travis-API-Version': '3',
      'Authorization': auth
    }
  };
  var req = https.request(options, function(res) {
    var body = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      body += chunk;
    });
    res.on('end', function(){
      try {
        var id = JSON.parse(body).request.id;
        console.log('build triggered', id);
        setInterval(callback, 10000, id);
      } catch (e) {
        console.error('problem with request: ' + e.message);
        process.exit(1);
      }
    });
  });
  req.on('error', function(e) {
    console.error('problem with request: ' + e.message);
    process.exit(1);
  });
  req.write('{"request":{"branch":"master"}}');
  req.end();
};

var testBuildSuccess = function(id)
{
  var requestPath = '/repo/' + process.env.REPO_SLUG  + '/request/' + id;
  var options = {
    host: 'api.travis-ci.com',
    port: 443,
    path: requestPath,
    headers: {
      'Accept': 'application/json',
      'Travis-API-Version': '3',
      'Authorization': auth
    }
  };
  https.get(options, function(res) {
    var body = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      body += chunk;
    });
    res.on('end', function(){
      var build = JSON.parse(body).builds;
      if (build && build[0]) {
        var state = build[0].state;
        console.log('build state', state);
        if (state == 'passed') {
          process.exit(0);
        } else if (state == 'failed' || state == 'canceled') {
          process.exit(1);
        } else if (state != 'started' && state != 'created' && state != 'booting') {
          console.log('unknown build state', state);
          process.exit(1);
        }
      }
    });
  }).on('error', function(e) {
    console.error('problem with request: ' + e.message);
    process.exit(1);
  });
}

createBuild(testBuildSuccess);
