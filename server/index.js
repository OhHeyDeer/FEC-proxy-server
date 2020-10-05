const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('../dist/index.html'));

app.listen(PORT, () => {
    console.log(`Running server on port: ${PORT}`);
});
