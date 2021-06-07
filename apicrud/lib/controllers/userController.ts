import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);
export class UserController{

public addNewUser (req: Request, res: Response) {
    let newUser = new User(req.body);

    newUser.save((err, User) => {
        if(err){
            res.send(err);
        }
        res.json(User);
    });
}
public getUsers (req: Request, res: Response) {
    User.find({}, (err, User) => {
        if(err){
            res.send(err);
        }
        res.json(User);
    });
}
public getUserWithID (req: Request, res: Response) {
    User.findById(req.params.UserId, (err, User) => {
        if(err){
            res.send(err);
        }
        res.json(User);
    });
}
public updateUser (req: Request, res: Response) {
    User.findOneAndUpdate({ _id: req.params.UserId }, req.body, { new: true }, (err, User) => {
        if(err){
            res.send(err);
        }
        res.json(User);
    });
}
public deleteUser (req: Request, res: Response) {
    User.remove({ _id: req.params.UserId }, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted User!'});
    });
}
}
