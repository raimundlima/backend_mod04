import { Prisma } from "@prisma/client";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    sobrenome: string;
    
    @IsInt()
    @IsNotEmpty()
    senha: string;
    
    @IsNotEmpty()
    email: string;
    
    @IsInt()
    @IsOptional()
    cpf: string;
    
    perfis?: Prisma.PerfilUncheckedCreateNestedManyWithoutUserInput;
}
