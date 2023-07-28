import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { UserController } from './controllers';
import { validateDataUser } from './middlewares/Users/validateDataUser';
import { validateUserLogin } from './middlewares/Users/validateUserLogin';

const app = express();
const userController = new UserController();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended:false }));

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta: ${process.env.PORT}`)
})

app.get('/', (req, res) => res.send({ message: 'OK' }));

app.post("/users/signup", validateDataUser, userController.create)
app.post("/users/signin", validateUserLogin, userController.signin)