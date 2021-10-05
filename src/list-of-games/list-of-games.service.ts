import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListOfGameDto } from './dto/create-list-of-game.dto';
import { UpdateListOfGameDto } from './dto/update-list-of-game.dto';

@Injectable()
export class ListOfGamesService {
  constructor (private readonly prisma:PrismaService){}

    private readonly _include={
      user:{
        select:{
          name:true,
        }
      },
      game:{
        select:{
          titulo: true,

        }
      }
    }

  create(data: CreateListOfGameDto) {
    return this.prisma.listOfGames.create({
      include: this._include,
      data,

    });
  }

  findAll() {
    //return `This action returns all listOfGames`;
    return this.prisma.listOfGames.findMany()
    
  }

  findOne(id: number) {
    //return `This action returns a #${id} listOfGame`;
    return this.prisma.listOfGames.findUnique({
      where: {id},
    });
  }

  update(id: number, data: UpdateListOfGameDto) {
    //return `This action updates a #${id} listOfGame`;
    return this.prisma.listOfGames.update({
      where: {id},
      data,
    });
  }

  remove(id: number) {
    //return `This action removes a #${id} listOfGame`;
    return this.prisma.listOfGames.delete({
      where: {id},
    });
  }
}
