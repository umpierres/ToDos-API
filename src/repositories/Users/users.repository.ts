import { users } from '../../database';
import { User } from '../../classes';
import { LoginDTO, UserDTO } from '../../usecases';

export class UserRepository { 
    listUsers(){
        return users.map((user) => user.toJSON());
    }

    createUser(dados:UserDTO){
        const user = new User(dados.email,dados.password, dados.remember)
        users.push(user)

        return user.toJSON();
    }

    findUserByCredentials(dados: LoginDTO) {
		const user = users.find(
			(user) =>
                user.toJSON().email === dados.email &&
                user.toJSON().password === dados.password
		);

		if (!user) return;

		return user.toJSON().id;
	}
}