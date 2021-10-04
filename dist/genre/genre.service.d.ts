import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenreService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createGenreDto: CreateGenreDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGenreDto: UpdateGenreDto): string;
    remove(id: number): string;
}
