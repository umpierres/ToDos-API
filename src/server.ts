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
app.post("/users/list-notes", noteController.list)
app.post("/users/create-note", validateCreateNote, noteController.create)
app.post("/users/update-note", validateUpdateNote, noteController.update)
app.post("/users/delete-note", noteController.delete)