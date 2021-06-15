import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";
import * as cors from "cors";
import { getExtension } from "mime";
var multer = require('multer')
// var upload = multer({ dest: 'uploads/' })
global.crypto = require('crypto')

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    // public mongoUrl: string = 'mongodb://10.10.10.8:27017/CRMdb';
    // public mongoUrl: string = 'mongodb://127.0.0.1:27017/testpfe';
    public mongoUrl: string = 'mongodb+srv://test:testtest@test1.fnyba.mongodb.net/testpfe?retryWrites=true&w=majority';
    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void {
        (mongoose as any).Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        // require('./seed/seed.ts');
    }

    private config(): void {
        //accept allcors request
        this.app.use(cors());
        //this.configCors();
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(express.static('uploads'));
        // this.app.use('/uploads', express.static('uploads'));

        var multer = require('multer')
        // var upload = multer({ dest: 'uploads/' })
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'uploads/');
            },
            filename: (req, file, cb) => {
                console.log("file : ", file)
                cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split(".")[1])
            }
        });

        let upload = multer({
            storage: storage
        });


        this.app.post('/api/upload', upload.single('image'), function (req: any, res) {
            if (!req.file) {
                console.log("No file is available!");
                return res.send({
                    success: false
                });

            } else {
                console.log('File is available!');
                return res.send({
                    success: true
                })
            }
        });
    }
}

export default new App().app;
