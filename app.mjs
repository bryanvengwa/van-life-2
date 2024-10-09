import express from 'express';
import bodyParser from 'body-parser';
import connectToDatabase from './src/config/dbConfig.mjs';
import bookingRoutes from './src/routes/bookingRoutes.mjs';
import Users from "./src/routes/userRoute.mjs"


const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))


// mount routes here 

app.use('/api' , bookingRoutes)
app.use('/api/users' , Users)





app.listen(process.env.PORT || 3001, () => {
    connectToDatabase();
    console.log(`Server is running on port ${process.env.PORT || 3001}`);
  });

export default app;
