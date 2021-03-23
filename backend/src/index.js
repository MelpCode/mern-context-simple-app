require('dotenv').config();
const app = require('./app');

//Start Server
app.listen(app.get('port'),()=>{
    console.log(`Server on PORT ${app.get('port')}`);
});