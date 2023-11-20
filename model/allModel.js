import mongoose from "mongoose";

const allSchema = new mongoose.Schema(
    {
        projects: {
            type: Object,
        },
        pro:{
            type: Object
        }
    }


);


let AllSchema = mongoose.models.alls || mongoose.model("alls", allSchema);
export default AllSchema;