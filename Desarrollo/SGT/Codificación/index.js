const app = require('./config/app');
const {connection} = require('./database/database');

(async() => {
  try {
    await connection()
    app.listen(app.get('PORT'), 
    () => console.log('Se ha iniciado el servidor en http://localhost:%s', app.get('PORT'))
    )
  } catch (err) {
    console.error(err);
    return process.exit();
  }
})()