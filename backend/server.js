const express = require('express');
const app = express();
const cors = require('cors');

app.get('/', (req, res) => {
  res.send('Backend :)');
});

app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
