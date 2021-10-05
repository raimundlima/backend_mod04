import { Prisma } from ".prisma/client";

export class Genre implements Prisma.GenreUncheckedCreateInput{
    idGenre?: number;
    name: string;
    
}
