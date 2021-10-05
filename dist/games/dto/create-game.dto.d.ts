import { Prisma } from "@prisma/client";
import { games } from "../entities/game.entity";
export declare class CreateGameDto extends games {
    titulo: string;
    cover: string;
    description: string;
    year: number;
    linkyt: string;
    users?: Prisma.ListOfGamesUncheckedCreateNestedManyWithoutGameInput;
}
