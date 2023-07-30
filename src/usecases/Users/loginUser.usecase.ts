import { UserRepository } from '../../repositories';

export type LoginDTO = {
	email: string;
	password: string;
};

export type LoginResponseDTO = {
	id: string;
	email:string
}

type LoginUserResponse = {
	success: boolean;
	message: string;
	data?: LoginResponseDTO;
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
			message: 'Cadastro encontrado! Bem-vindo(a)',
			data: findUser,
		};
	}
}
