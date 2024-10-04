let express = require('express');
let app = express();
app.listen(3000, () => {
    console.log('Server is running');
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('hello world!');
});