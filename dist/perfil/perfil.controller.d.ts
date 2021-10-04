import { PerfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
export declare class PerfilController {
    private readonly perfilService;
    constructor(perfilService: PerfilService);
    create(createPerfilDto: CreatePerfilDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePerfilDto: UpdatePerfilDto): string;
    remove(id: string): string;
}
