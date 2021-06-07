import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);
export class UserController {

    public register(req: Request, res: Response) {
        console.log("body : ",req.body)
        let newUser = new User(req.body);

        newUser.save((err, user : any) => {
            if (err) {
                res.send(err);
            }
            res.json({message : "utilisateur créé avec succès"});
        });
    }
    public login(req: Request, res: Response) {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (err) res.send(err);
            else {
                console.log("user : ",user)
                if (!user) res.send({ error: 400, message: "user not found" });
                else if (user.password != req.body.password) res.send({ error: 400, message: "user password doesn't match" });
                else {
                    user = JSON.parse(JSON.stringify(user));
                    delete user.password;
                    res.json(user);
                }
            }
        });
    }
    public getAllUsers(req: Request, res: Response) {
        User.find({}, (err, User) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
    }
    public getUserbyId(req: Request, res: Response) {
        User.findById(req.params.id, (err, User) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
    }
    public update(req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, User) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
    }
    public delete(req: Request, res: Response) {
        User.remove({ _id: req.params.id }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted User!' });
        });
    }
}
