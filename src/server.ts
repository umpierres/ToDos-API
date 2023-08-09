import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { NoteController, UserController } from './controllers';
import { validateDataUser } from './middlewares/Users/validateDataUser';
import { validateUserLogin } from './middlewares/Users/validateUserLogin';
import { validateUpdateNote } from './middlewares/Notes/validateUpdateNote';
import { validateCreateNote } from './middlewares/Notes/validateCreateNote';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended:false }));

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta: ${process.env.PORT}`)
})

app.get('/', (req, res) => res.status(200).json({ message: 'OK' }));

// user
const userController = new UserController();

app.post("/users/signup", validateDataUser, userController.signup)
app.post("/users/signin", validateUserLogin, userController.signin)

//notes
const noteController = new NoteController();

app.post("/notes/:ownerID", validateCreateNote, noteController.create)
app.put("/notes/:ownerID/:noteID", validateUpdateNote, noteController.update)
app.put("/notes/archived/:authorId/:noteId", noteController.archive);
app.delete("/notes/:ownerID/:noteID", noteController.delete)
app.get("/notes/:ownerID", noteController.listNotes)