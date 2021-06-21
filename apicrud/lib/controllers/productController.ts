import * as mongoose from 'mongoose';
import { ProductSchema } from '../models/productModel';
import { Request, Response } from 'express';

const Product = mongoose.model('Product', ProductSchema);
export class ProductController {

    public getArticles(req: Request, res: Response) {
        Product.find({}, (err, article) => {
            if (err) {
                res.send(err);
            }
            res.json(article);
        });
    }
    public getArticleWithID(req: Request, res: Response) {
        Product.findById(req.params.articleId, (err, article) => {
            if (err) {
                res.send(err);
            }
            res.json(article);
        });
    }
    public updateArticle(req: Request, res: Response) {
        Product.findOneAndUpdate({ _id: req.params.articleId }, req.body, { new: true }, (err, article) => {
            if (err) {
                res.send(err);
            }
            res.json(article);
        });
    }
    public deleteArticle(req: Request, res: Response) {
        Product.remove({ _id: req.params.articleId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted!' });
        });
    }
}