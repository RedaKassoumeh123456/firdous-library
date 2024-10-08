import { Schema , model, models} from 'mongoose';

const CategorySchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
},{
    timestamps:true,
});
// console.log(models.Category)
if (!models.Category) model('Category',CategorySchema);
export default models.Category || model('Category',CategorySchema);