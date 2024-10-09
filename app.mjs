import express from 'express';
import bodyParser from 'body-parser';
import connectToDatabase from './src/config/dbConfig.mjs';
import bookingRoutes from './src/routes/bookingRoutes.mjs';


const app = express();
app.use(bodyParser.json());


// mount routes here 

app.use('/api' , bookingRoutes)





app.listen(process.env.PORT || 3001, () => {
    connectToDatabase();
    console.log(`Server is running on port ${process.env.PORT || 3001}`);
  });

export default app;
