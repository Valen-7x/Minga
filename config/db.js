import {connect} from "mongoose";
connect (process.env.LINK_DB)  //conecto con la base de datos -.
.then(()=>console.log("connected to data base")) //devuelve una promesa
.catch((error)=>(console.log(error)))