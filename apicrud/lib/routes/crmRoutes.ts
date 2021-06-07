import {Request, Response} from "express";
import { ArticleController } from "../controllers/articleController";
import { CategorieController } from "../controllers/categorieController";

export class Routes {
    public articleController: ArticleController = new ArticleController();
    public categorieController: CategorieController = new CategorieController();
   

    public routes(app): void {

        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })

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
         app.route('/typevente')
         // list all
         .get(this.typeventeController.getTypeVentes)
         // Create a new typevente
         .post(this.typeventeController.addNewTypeVente);
 
    }
}