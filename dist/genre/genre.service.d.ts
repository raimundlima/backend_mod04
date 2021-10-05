import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenreService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Genre[]>;
    findOne(idGenre: number): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
    update(id: number, updateGenreDto: UpdateGenreDto): string;
    remove(id: number): string;
}
