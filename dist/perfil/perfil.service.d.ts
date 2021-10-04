import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
export declare class PerfilService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPerfilDto: CreatePerfilDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePerfilDto: UpdatePerfilDto): string;
    remove(id: number): string;
}
