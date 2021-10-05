import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";
import { games } from "../entities/game.entity";

export class CreateGameDto extends games {

  @IsString()
  @IsNotEmpty()  
  titulo:        string;

  cover:         string;

  @IsString()
  @IsNotEmpty()
  description:   string;

  @IsNotEmpty()
  year:          number;
  
  @IsString()
  linkyt:        string;

  users?:         Prisma.ListOfGamesUncheckedCreateNestedManyWithoutGameInput;

}
