const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://groszhart:jXDIuoc3mQyAI96Z@rdcdatabase.gque4.mongodb.net/?retryWrites=true&w=majority&appName=RDCDatabase';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Backend :)');
});

app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));