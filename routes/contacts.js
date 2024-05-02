import express from "express";
import { contactsControllers } from "../controllers/contacts.js";
import { validateBody, authenticate, isValidId } from "../middlewars/index.js";
import {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} from "../schemas/contactsSchemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, contactsControllers.getAllContacts);

contactsRouter.get(
  "/:id",
  authenticate,
  isValidId,
  contactsControllers.getOneContact
);

contactsRouter.post(
  "/",
 authenticate,
  validateBody(createContactSchema),
  contactsControllers.createContact
);

contactsRouter.delete(
  "/:id",
  authenticate,
  isValidId,
  contactsControllers.deleteContact
);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(updateContactSchema),
  contactsControllers.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  validateBody(updateFavoriteSchema),
  isValidId,
  contactsControllers.updateFavorite
);

export default contactsRouter;