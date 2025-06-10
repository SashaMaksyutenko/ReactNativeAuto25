import express,{response} from 'express';
import cors from 'cors';
import allRoutes from './routes/index.route.js';
import { prisma } from '../prisma/client.js';
const app=express()
app.use(cors({origin:"*"}))
const PORT=3000
app.use((req,res,next)=>{express.json()(req,res,next)})
app.use((req,res,next)=>{
    if(req.originalUrl.includes('api/cars/')){
        next()
    }else{
        express.json({limit: '1mb'})(req,res,next)
    }
})
app.use('/api',allRoutes)
app.get('/',async(req,res)=>{
    try {
        await prisma.$connect();
        res.status(200).send('DB connection successful');
    } catch (error) {
        console.error('DB connection error:', error);
        res.status(500).send('DB connection error');
    }
})
app.listen(PORT, () => {
  console.log(`Server is running on port :${PORT}`);
});