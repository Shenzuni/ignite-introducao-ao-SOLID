import { User } from "../../model/User"
import { IUsersRepository } from "../../repositories/IUsersRepository"

interface IRequest {
  name: string
  email: string
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    const existentUser = this.usersRepository.findByEmail(email)

    if (existentUser) {
      throw new Error("400")
    }

    const user = this.usersRepository.create({ name, email })
    return user
  }
}

export { CreateUserUseCase }
