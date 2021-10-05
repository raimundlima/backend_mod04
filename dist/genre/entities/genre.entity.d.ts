import { Prisma } from ".prisma/client";
export declare class Genre implements Prisma.GenreUncheckedCreateInput {
    idGenre?: number;
    name: string;
}
