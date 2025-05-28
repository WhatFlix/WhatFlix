const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movies');

dotenv.config();
const app = express();
app.use(cors());
app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));