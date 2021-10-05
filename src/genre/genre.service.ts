import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor (private readonly prisma: PrismaService){}
  private readonly _include={
    games:{
      select:{
        game:true,

      }
    }
  };
  create(data: CreateGenreDto) {
    //return 'This action adds a new genre';
    return this.prisma.genre.create({
      
      data,

    });
  }

  findAll() {
    //return `This action returns all genre`;
    return this.prisma.genre.findMany();
  }

  findOne(idGenre: number) {
    //return `This action returns a #${id} genre`;
    return this.prisma.genre.findUnique({
     where: {idGenre}, 
     
   
    });
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return `This action updates a #${id} genre`;
  }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
