//Install express server
const express = require('express');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/tc2-assignment-frontend'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: 'dist/tc2-assignment-frontend/'}
  );
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, '0.0.0.0');
