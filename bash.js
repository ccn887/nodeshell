var commands = require('./command.js');
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var inputStr = data.toString().trim(); // remove the newline
  var cmdArr = inputStr.split(' ')
  if (cmdArr[0] === 'date'){
    commands.date();
  }
  else if(cmdArr[0] === 'pwd'){
    commands.pwd();
  }
  else if(cmdArr[0] === 'ls'){
    commands.ls();
  }
  else if(cmdArr[0] === 'echo'){
    commands.echo(cmdArr);
  }
  else if(cmdArr[0] === 'cat'){
    commands.cat(cmdArr[1]);
  }
  else if(cmdArr[0] === 'head'){
    commands.head(cmdArr[1]);
  }
  else if(cmdArr[0] === 'tail'){
    commands.tail(cmdArr[1]);
  }
  else if(cmdArr[0] === 'sort'){
    commands.sort(cmdArr[1])
  }
  else if(cmdArr[0] === 'wc'){
    commands.wc(cmdArr[1])
  }
  else if(cmdArr[0] === 'uniq'){
    commands.uniq(cmdArr[1])
  }
  else if(cmdArr[0] === 'curl'){
    commands.curl(cmdArr[1])
  }
  else {
    process.stdout.write('You typed: ' + inputStr);
  }
  //setTimeout(function(){commands.nPrompt(cmdArr[0]);}, 500);
});

