import express from "express";
import contactsControllers from "../../controllers/contactsControllers.js";
import { validateBody } from "../../decorators/validateBody.js";
import bodyEmpty from "../../middlewares/bodyEmpty.js";
import {
  addContactSchema,
  updateContactSchema,
} from "../../schemas/contactsSchemas.js";

export const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:contactId", contactsControllers.getContactById);

contactsRouter.post(
  "/",
  bodyEmpty,
  validateBody(addContactSchema),
  contactsControllers.addNewContact
);

contactsRouter.delete("/:contactId", contactsControllers.deleteContactById);

contactsRouter.put(
  "/:contactId",
  bodyEmpty,
  validateBody(updateContactSchema),
  contactsControllers.updateContactById
);