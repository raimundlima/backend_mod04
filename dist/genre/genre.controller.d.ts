import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    create(createGenreDto: CreateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Genre[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
    update(id: string, updateGenreDto: UpdateGenreDto): string;
    remove(id: string): string;
}
