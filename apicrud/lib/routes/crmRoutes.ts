import { Request, Response } from "express";
import { ArticleController } from "../controllers/articleController";
import { CategorieController } from "../controllers/categorieController";
import { UserController } from "../controllers/userController";
export class Routes {
    public articleController: ArticleController = new ArticleController();
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
        app.route('/article')
            // list all
            .get(this.articleController.getArticles)
            // Create a new article
            .post(this.articleController.addNewArticle);


        // get a specific article , update, delete
        app.route('/article/:articleId')
            .get(this.articleController.getArticleWithID)
            .put(this.articleController.updateArticle)
            .delete(this.articleController.deleteArticle)
        // Article
        app.route('/article')
            // list all
            .get(this.articleController.getArticles)
            // Create a new article
            .post(this.articleController.addNewArticle);


        // get a specific article , update, delete
        app.route('/article/:articleId')
            .get(this.articleController.getArticleWithID)
            .put(this.articleController.updateArticle)
            .delete(this.articleController.deleteArticle)
        // Categorie
        app.route('/categorie')
            // list all
            .get(this.categorieController.getCategories)
            // Create a new categorie
            .post(this.categorieController.addNewCategorie);


        // get a specific categorie , update, delete
        app.route('/categorie/:categorieId')
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