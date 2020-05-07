const express = require('express');
const app = express();

//SETTINGS
app.set('port', process.env.PORT || 4000);

//MIDDLEWARES
app.use(express.json());

//ROUTES
app.use(require('./routes/employees'));



//EMPEZANDO EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Server on PORT', app.get('port'));
});