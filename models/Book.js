import pkg from 'mongoose';

const { Schema , model, models} = pkg

const BookSchema = new Schema(
    {
        bookName:{
            type:String,
            required:true,
        },
        authorName:{
            type:String,
            required:true,
        },
        img:{
            type:String,
        },
        description:{
            type:String,
            required:true,
        },
        summary:{
            type:String,
            required:true,
        },
        available:{
            type:Boolean,
            default:true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
    },
    {
        timestamps: true,
    }
);


export default models?.Book || model('Book', BookSchema);