import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { UserController } from './controllers';

const app = express();
const userController = new UserController();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended:false }));

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta: ${process.env.PORT}`)
})

app.get('/', (req, res) => res.send({ message: 'OK' }));

app.post("/user", userController.create)