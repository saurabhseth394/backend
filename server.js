const express = require('express');
var cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.SERVER_PORT || 5000;
const app = express();
app.use(cors())

app.use('/v1/api/user/', require('./routes/user'));

app.listen(PORT, () => {
    console.log('server running on port ' + PORT)
})