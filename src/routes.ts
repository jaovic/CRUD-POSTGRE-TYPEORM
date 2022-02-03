import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { UpdtadeCategoryController } from "./controllers/updateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdtadeCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);

export {routes};