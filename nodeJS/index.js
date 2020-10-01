const express = require('express');
const app = express();

app.get('*', (req, resp) => {
    resp.send({message: 'chanchito'})
});

app.listen(3000,  () => console.log('nuestra app esta escuchando en el puerto 3000'));
