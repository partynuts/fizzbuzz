const App = require('./src/app');
const app = App();

(async () => {
  console.log("INDEX IST DA!!");
  // const models = require('./src/models');

  const port = process.env.PORT || 3000;

  // await models.sync();

  app.listen(port, () => console.log(`FizzBuzz App listening on port ${port}`));
  console.log("NACH PORT LISTENING")
})();


process.on('uncaughtException', handleException);
process.on('unhandledRejection', handleException);

function handleException(err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
  console.error(err.stack);
  process.exit(1);
}
