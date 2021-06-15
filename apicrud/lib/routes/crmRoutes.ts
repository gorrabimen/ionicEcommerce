import { Request, Response } from "express";
import { ProductController } from "../controllers/productController";
import { CategorieController } from "../controllers/categorieController";
import { UserController } from "../controllers/userController";
export class Routes {
    public productController: ProductController = new ProductController();
    public categorieController: CategorieController = new CategorieController();
    public userController: UserController = new UserController();


    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })

        //user
        app.route('/user/getAllUsers').get(this.userController.getAllUsers)
        app.route('/user/getUserbyId/:id').get(this.userController.getUserbyId)
        app.route('/user/login').post(this.userController.login)
        app.route('/user/register').post(this.userController.register)
        app.route('/user')
            .put(this.userController.update)
            .delete(this.userController.delete)

        // Article
        app.route('/product')
            // list all
            .get(this.productController.getArticles)
            // Create a new article
            .post(this.productController.addNewArticle);


        // get a specific article , update, delete
        app.route('/product/:productId')
            .get(this.productController.getArticleWithID)
            .put(this.productController.updateArticle)
            .delete(this.productController.deleteArticle)
        // Article
        app.route('/product')
            // list all
            .get(this.productController.getArticles)
            // Create a new article
            .post(this.productController.addNewArticle);


        // get a specific article , update, delete
        app.route('/product/:productId')
            .get(this.productController.getArticleWithID)
            .put(this.productController.updateArticle)
            .delete(this.productController.deleteArticle)
        // Categorie


        app.route('/category')
            .get(this.categorieController.getCategories)
            .post(this.categorieController.addNewCategorie);


        // get a specific category , update, delete
        app.route('/category/:categorieId')
            .get(this.categorieController.getCategorieWithID)
            .put(this.categorieController.updateCategorie)
            .delete(this.categorieController.deleteCategorie)
        // TypeVente
        //  app.route('/typevente')
        //  // list all
        //  .get(this.typeventeController.getTypeVentes)
        //  // Create a new typevente
        //  .post(this.typeventeController.addNewTypeVente);

    }
}