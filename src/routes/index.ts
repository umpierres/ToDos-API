import express from "express";
import { NoteController, UserController } from "../controllers";
import { validateDataUser, validateNote, validateTitleNote, validateUserLogin } from "../middlewares";

const app = express.Router();

app.get('/', (req, res) => res.status(200).json({ message: 'OK' }));

// user
const userController = new UserController();

app.post("/users/signup", validateDataUser, userController.signup)
app.post("/users/signin", validateUserLogin, userController.signin)

//notes
const noteController = new NoteController();

app.post("/notes/:ownerID", validateNote, noteController.create)
app.get("/notes/:ownerID/", noteController.listNotes) //listar
app.put("/notes/:ownerID/:noteID", validateNote, noteController.update)
app.delete("/notes/:ownerID/:noteID", noteController.delete)

export default app;