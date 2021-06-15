import * as mongoose from 'mongoose';
import { CategorieSchema } from '../models/categorieModel';
import { Request, Response } from 'express';

const Categorie = mongoose.model('Categorie', CategorieSchema);
export class CategorieController {

    public getCategories(req: Request, res: Response) {
        Categorie.find({}, (err, categorie) => {
            if (err) {
                res.send(err);
            }
            res.json(categorie);
        });
    }
    public getCategorieWithID(req: Request, res: Response) {
        Categorie.findById(req.params.categorieId, (err, categorie) => {
            if (err) {
                res.send(err);
            }
            res.json(categorie);
        });
    }
    public updateCategorie(req: Request, res: Response) {
        Categorie.findOneAndUpdate({ _id: req.params.categorieId }, req.body, { new: true }, (err, categorie) => {
            if (err) {
                res.send(err);
            }
            res.json(categorie);
        });
    }
    public deleteCategorie(req: Request, res: Response) {
        Categorie.remove({ _id: req.params.categorieId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted categorie!' });
        });
    }
}