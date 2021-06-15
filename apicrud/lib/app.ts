import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";
import * as cors from "cors";
import { ProductSchema } from "./models/productModel";
import { CategorieSchema } from "./models/categorieModel";
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
                cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split(".")[1])
            }
        });

        let upload = multer({
            storage: storage
        });


        this.app.post('/product/save', upload.single('image'), function (req: any, res) {
            if (!req.file) {
                console.log("No file is available!");
                return res.status(400).send({
                    message: "No file is available!"
                });
            } else {
                req.body.imageUrl = req.file.filename
                console.log("req.body : ", req.body)
                const Product = mongoose.model('Product', ProductSchema);
                let newProduct = new Product(req.body);
                newProduct.save((err, product) => {
                    if (err) {
                        console.error({ message: "Quelque chose s'est mal passé." })
                    }
                    console.log({ message: "Produit créé avec succès." });
                    console.log("Product : ", product);
                });
                console.log('File is available!');
                return res.send(newProduct);
            }
        });


        this.app.post('/category/save', upload.single('image'), function (req: any, res) {
            if (!req.file) {
                console.log("No file is available!");
                return res.status(400).send({
                    message: "No file is available!"
                });
            } else {
                req.body.imageUrl = req.file.filename
                console.log("req.body : ", req.body)
                const Categorie = mongoose.model('Categorie', CategorieSchema);
                let newCategorie = new Categorie(req.body);
                newCategorie.save((err, category) => {
                    if (err) {
                        console.error({ message: "Quelque chose s'est mal passé." })
                    }
                    console.log({ message: "Produit créé avec succès." });
                    console.log("newCategorie : ", category);
                });
                console.log('File is available!');
                return res.send(newCategorie);
            }
        });
    }
}

export default new App().app;
