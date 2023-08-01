import { UserRepository } from '../../repositories';

export type UserDTO = {
    email:string,
    password: string,
}

export type ReturnCreateUser = {
	success: boolean;
	message: string;
	data?: UserDTO & { id: string };
};

export class CreateUser{
    execute(data: UserDTO): ReturnCreateUser{
        const repository = new UserRepository();

        const userExist = repository.listUsers().some((user) => user.email === data.email)

        if(userExist){
            return {
				success: false,
				message: 'Usuário já existe.',
			};
        }

        const userCreated = repository.createUser(data);

        return {
            success:true,
            message: "Usuário cadastrado com sucesso.",
            data: userCreated,
        }
    }
}