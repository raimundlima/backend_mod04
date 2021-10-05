import { Prisma } from ".prisma/client";
export declare class games implements Prisma.GamesUncheckedCreateInput {
    idGame?: number;
    titulo: string;
    cover: string;
    description: string;
    year: number;
    linkyt: string;
    users?: Prisma.ListOfGamesUncheckedCreateNestedManyWithoutGameInput;
}
