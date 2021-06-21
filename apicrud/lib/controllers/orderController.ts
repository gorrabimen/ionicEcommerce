import * as mongoose from 'mongoose';
import { OrderSchema } from '../models/orderModel';
import { Request, Response } from 'express';

const Order = mongoose.model('Order', OrderSchema);
export class OrderController {

    public createOrder(req: Request, res: Response) {
        console.log("body : ", req.body)
        let newDoc = new Order(req.body);
        newDoc.save((err, doc) => {
            if (err) {
                return res.status(500).send({ message: "Quelque chose s'est mal passé." });
            }
            console.log({ message: "Commande créé avec succès." });
            console.log("newDoc : ", doc);
            return res.send(newDoc);
        });
    }

    public getOrders(req: Request, res: Response) {
        Order.find({}, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        }).populate('Product').populate('User');
    }
    public getOrderByUserId(req: Request, res: Response) {
        Order.find({ user: new mongoose.Types.ObjectId(req.params.userId) }, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        }).populate('Product').populate('User');
    }

    public getOrderWithID(req: Request, res: Response) {
        Order.findById(req.params.orderId, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        }).populate('Product');
    }
    public updateOrder(req: Request, res: Response) {
        Order.findOneAndUpdate({ _id: req.params.orderId }, req.body, { new: true }, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }
    public deleteOrder(req: Request, res: Response) {
        Order.remove({ _id: req.params.orderId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted!' });
        });
    }
}