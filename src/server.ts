import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { NoteController, UserController } from './controllers';
import { validateDataUser } from './middlewares/Users/validateDataUser';
import { validateUserLogin } from './middlewares/Users/validateUserLogin';
import { validateUpdateNote } from './middlewares/Notes/validateUpdateNote';
import { validateCreateNote } from './middlewares/Notes/validateCreateNote';

const app = express();
const userController = new UserController();
const noteController = new NoteController();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended:false }));

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta: ${process.env.PORT}`)
})

app.get('/', (req, res) => res.send({ message: 'OK' }));

app.post("/users/signup", validateDataUser, userController.create)
app.post("/users/signin", validateUserLogin, userController.signin)

//notes
app.post("/notes/:ownerID", validateCreateNote, noteController.create)

app.put("/notes/:ownerID/:noteID", validateUpdateNote, noteController.update)

app.put(
	"/notes/archived/:authorId/:noteId",
	noteController.archive
);

app.delete("/notes/:ownerID/:noteID", noteController.delete)

app.get("/notes/:ownerID", noteController.listNotes)