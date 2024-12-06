
import configKeys from "../../config";
import { Server } from "http";
const PORT = process.env.PORT || 3000;
const server = (app:Server)=>{
    app.listen(PORT,()=>
    console.log(`Server listening on http://localhost:${PORT}`)
    );
    // app.listen(configKeys.PORT,()=>
    // console.log(`Server listening on http://localhost:${configKeys.PORT}`)
    // );
}
export default server;