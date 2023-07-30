import { UserRepository } from '../../repositories';

export type LoginDTO = {
	email: string;
	password: string;
};

type LoginUserResponse = {
	success: boolean;
	message: string;
	data?: string;
};

export class LoginUser {
	execute(dados: LoginDTO): LoginUserResponse {
		const repository = new UserRepository();

		const findUser = repository.findUserByCredentials(dados);

		if (!findUser) {
			return {
				success: false,
				message: 'Senha e/ou email incorretos!',
				data: findUser,
			};
		}

		return {
			success: true,
			message: 'Dados Corretos!',
			data: findUser,
		};
	}
}
