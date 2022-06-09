import { connect } from "mongoose";

const dbConnection =async ()=>{
    try{
        connect(process.env["MONGODB_CNN"] || "")
    }catch(error){
        console.log(error);
        throw new Error("Error al conectarse a la BD")
    }
}

export{dbConnection}