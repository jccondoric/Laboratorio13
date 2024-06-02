 /* Lab 12Ingenieria de Software
 Jhon Carlos Condori Cuevas
  * date 2024-05-24
   */
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

