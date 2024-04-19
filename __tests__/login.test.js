import express from "express";
import  request from "supertest"
import { login } from "../controllers/auth.js";


const app = express();
app.post("/api/users/login", login);

describe("test login controllers", async () => {
    beforeAll(() => (app.listen(3000)))
    
    test("login return object with token", async () => {
        const response = await request(app).post("/api/users/login");
        express(response.status).toBe(200);
})})

