import mongoose from 'mongoose';

let connected = false ;

const connectDB = async () =>{
    mongoose.set('strictQuery',true);

    // If the database is already connected, don't connect again
    if (connected){
        console.log('MongoDb is already connected...')
        return ;
    }
    // Connect to MongoDB
    try{
        console.log(process.env.MONGODB_URI)
        await mongoose.connect(process.env.MONGODB_URI);
        connected=true;
        console.log('MongoDB connected...');
    } catch (error){
        console.log(error);
    }
};

export default connectDB ;