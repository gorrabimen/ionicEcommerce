import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";
import * as cors from "cors";
class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
   // public mongoUrl: string = 'mongodb://10.10.10.8:27017/CRMdb';
    public mongoUrl: string = 'mongodb://127.0.0.1:27017/mongo_data_base_name';
    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void{
        (mongoose as any).Promise = global.Promise;
        mongoose.connect(this.mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true});
    }

    private config(): void{
        //accept allcors request
       this.app.use(cors());
       //this.configCors();
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
  /*  private configCors():void{
        this.app.use(function (req, res, next) {

            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*');
        
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
           // res.setHeader('Access-Control-Allow-Credentials', true);
        
            // Pass to next layer of middleware
            next();
        });
    }
*/
}

export default new App().app;
