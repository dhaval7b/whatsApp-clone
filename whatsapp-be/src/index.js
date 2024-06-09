import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();
const PORT = process.env.PORT || 8000;
console.log(process.env.Node_ENV);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});