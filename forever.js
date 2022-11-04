import forever from 'forever-monitor';

// SERVER

const server = new (forever.Monitor)("app.js", {
  max: 10,
  silent: true,
  args: []
});

server.on('start', function () {
  console.log("server listening")
})

server.on('exit', function () {
  console.log('Server has exited.');
});
