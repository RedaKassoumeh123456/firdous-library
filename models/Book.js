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
        },
        summary:{
            type:String,
        },
        available:{
            type:Boolean,
            default:true,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
    },
    {
        timestamps: true,
    }
);


export default models?.Book || model('Book', BookSchema);