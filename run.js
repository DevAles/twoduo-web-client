const express = require('express');
const app = express();

const PORT = 8000;

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`> Running web-client in port ${PORT}`);
})
