import { Prisma } from "@prisma/client";
export declare class User implements Prisma.UserUncheckedCreateInput {
    idUser?: number;
    name: string;
    sobrenome: string;
    senha: string;
    email: string;
    cpf: string;
    games?: Prisma.ListOfGamesUncheckedCreateNestedManyWithoutUserInput;
    perfis?: Prisma.PerfilUncheckedCreateNestedManyWithoutUserInput;
}
