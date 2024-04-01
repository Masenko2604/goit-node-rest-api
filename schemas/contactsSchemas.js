import Joi from "joi";

const Joi = require("joi");

const Joi = require("joi");

const createContactSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
})

module.exports = {
    createContactSchema,
}