import 'dotenv/config';
import loadExpress from './expressLoader.js';

const app = loadExpress();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on ::: ${port}`);
});
