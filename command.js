var fs = require('fs')
var request = require('request');

module.exports = {
  pwd: function(filename){
    process.stdout.write(process.cwd().toString())
    module.exports.nPrompt();
  },
  date: function(filename){
    var today = new Date();
    process.stdout.write(today.toString())
    module.exports.nPrompt();
  },
  nPrompt: function(cmd, filename){
    process.stdout.write('\nprompt > ');
  },
  ls: function(filename){
      fs.readdir(process.cwd(), function(err, files){
        if (err) throw err;
        else process.stdout.write(files.join(' '))
        module.exports.nPrompt();
      });
    },
  echo: function(arr, filename){
    process.stdout.write(arr.slice(1).join(' '));
  },
  cat: function(filename){
    fs.readFile(filename, function(err, data){
      if (err) throw err;
      else process.stdout.write(data)
      module.exports.nPrompt();
    })
  },
  head: function(filename){
    console.log("head ran");
    fs.readFile(filename, 'utf8', function(err, data){
      console.log("callback ran");
      if (err) throw err;
      else {
        var counter = 5
        var i = 0
        var dataStr = ''
        while(counter > 0){
          if(data[i] === '\n'){
            counter--
          }
        dataStr += data[i]
        i++
        }
      }
      // console.log("data: ", data);
      // console.log("dataString: ", dataString);
      process.stdout.write(dataStr)
      module.exports.nPrompt();
    })
  },
  tail: function(filename){
    fs.readFile(filename, 'utf8', function(err, data){
      if (err) throw err;
      else {
        var counter = 5
        var i = data.length -1;
        var dataStr = ''
        while(counter > 0){
          if(data[i] === '\n'){
            counter--;
          }
        dataStr += data[i]
        i--;
        }
      }
      process.stdout.write(dataStr.split("").reverse().join(""))
      module.exports.nPrompt();
    })
  },
  sort: function(filename){
    fs.readFile(filename, 'utf8', function(err, data){
      if(err) throw err;
      let linesArr = [];
      var i = 0
      var lineString = '';
      while (i < data.length){
        lineString += data[i];
        if (data[i] === '\n'){
          linesArr.push(lineString);
          lineString = '';
        }
        i++;
      }
      linesArr.sort();
      process.stdout.write(linesArr.join("\n"));
      module.exports.nPrompt();
    })
  },
  wc: function(filename){
    fs.readFile(filename, 'utf8', function(err, data){
      if(err) throw err;
      let linesArr = [];
      var i = 0;
      var counter = 0;
      while (i < data.length){
        if (data[i] === "\n"){
          counter++;
        }
        i ++;
      }
      process.stdout.write(counter.toString());
      module.exports.nPrompt();
    })
  },
  uniq: function(filename){
    fs.readFile(filename, 'utf8', function(err, data){
      if(err) throw err;
      let linesArr = [];
      var i = 0
      var lineString = '';
      while (i < data.length){
        lineString += data[i];
        if (data[i] === '\n'){
          if (!linesArr.includes(lineString)){
            linesArr.push(lineString);
          }
          lineString = '';
        }
        i++;
      }
      process.stdout.write(linesArr.join("\n"));
      module.exports.nPrompt();
    })
  },
  curl: function(url){
    request(url, function(err, response, body){
      if (err) process.stdout.write(err);
      console.log("status code: ", response && response.statusCode);
      console.log("body: ", body);
      module.exports.nPrompt();
    })

  }
}

