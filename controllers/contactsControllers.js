const {Contact} = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
    const result = await Contact.find({}, "-createdAt -updatedAt");
    res.json(result);
}

const getById = async (req, res) => {
    const { id } = req.params;
   
    const result = await Contact.findById(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
}

const add = async (req, res) => {
    const result = await Contact.create(req.body);
    res.status(201).json(result);
}

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
}

const updateFavorite = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
}

const deleteById = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndRemove(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json({
        message: "Delete success"
    })
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    updateFavorite: ctrlWrapper(updateFavorite),
    deleteById: ctrlWrapper(deleteById),
}




// import path from "path"

// import { addContact, getContactById, listContacts, removeContact, updateContactById } from "../services/contactsServices.js";

// export const getAllContacts = async(req, res, next) => {
//    const getUsers = await listContacts();
//     res.json(getUsers);
// };

// export const getOneContact = async(req, res) => {
//     const { id } = req.params;
//     const getUser = await getContactById(id);
    
//   if (!getUser) {
//    res.status(404).json({"message": "Not found"})
//     }
//   res.json(getUser)
// };

// export const deleteContact = async(req, res) => {
//     const { id } = req.params;
//     const removeContacted = await removeContact(id);

//     if (!removeContacted) {
//        return res.status(404).json({"message": "Not found"})
//          }
//        res.json(removeContacted)
// };

// export const createContact = async(req, res) => {

// const createNewContcat = await addContact(req.body);

//     res.status(201).json(createNewContcat);
// };

// export const updateContact = async(req, res) => {
// const { id } = req.params;
// if (Object.keys(req.body).length === 0) {
//    return res.status(400).json({"message": "Body must have at least one field"})
// }
// const updateContacts = await updateContactById(id, req.body);
// if (!updateContacts) {
//    return res.status(404).json({"message": "Not found"})
// };

// res.json(updateContacts);
// };