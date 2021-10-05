import { Prisma } from "@prisma/client";
import { User } from "../entities/user.entity";
export declare class CreateUserDto extends User {
    name: string;
    sobrenome: string;
    senha: string;
    email: string;
    cpf: string;
    perfis?: Prisma.PerfilUncheckedCreateNestedManyWithoutUserInput;
}
