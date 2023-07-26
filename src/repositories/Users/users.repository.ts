import { users } from '../../database';
import { User } from '../../classes';
import { UserDTO } from '../../usecases';

export class UserRepository { 
    listUsers(){
        return users.map((user) => user.toJSON());
    }

    createUser(dados:UserDTO){
        const user = new User(dados.name,dados.email,dados.password)
        users.push(user)

        return user.toJSON();
    }
}