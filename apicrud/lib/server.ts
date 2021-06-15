import app from "./app";
import { UserSchema } from "./models/userModel";
import * as mongoose from 'mongoose';

//seed.js
const User = mongoose.model('User', UserSchema);

User.findOne({ email: "admin@gmail.com" }, (err, user) => {
    if (err) console.error(err);
    else {
        if (!user) {
            console.log({ message: "Utilisateur non trouvé." });
            console.log({ message: "Création de l'utilisateur..." });
            const newUser = new User({
                firstname: "Admin",
                lastname: "Admin",
                email: "admin@gmail.com",
                gender: "male",
                role: "admin",
                password: "admin",
                mobile: "+216 52 963 741"
            });
            newUser.save((err, user: any) => {
                if (err) {
                    console.error(err);
                }
                console.log({ message: "utilisateur créé avec succès." });
            });
        } else {
            console.log({ message: "l'admin existe déjà." });
        }
    }
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})