require('dotenv').config(); // Import our .env

const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
const middleware = require('./middleware/middleware');
const sendgridApi = require('./routes/sendgrid');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(middleware.ensureHttps);
}

// Middleware
app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json());

// apis
app.use(sendgridApi);

app.use(express.static(path.join(__dirname, './dist')));

// Fallback to UI for invalid route
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🔥 Server is listening on PORT:${PORT}`);
});
