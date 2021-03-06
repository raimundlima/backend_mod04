import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor (private readonly prisma: PrismaService){}
  private readonly _include={
    games:{
      select:{
        game:true
      }
    },
    perfil:{
      select:{
        nickname:true,
        image:true,
      }
    },

  };
  
  
  
  create(data: CreateUserDto) {
    //return 'This action adds a new user';
    return this.prisma.user.create({
      data,
      include:this._include

    
    });
  }

  findAll() {
    //return `This action returns all user`;
    return this.prisma.user.findMany()
  }

  findOne(idUser: number) {
    //return `This action returns a #${id} user`;
    return this.prisma.user.findUnique(
      {
        where: {idUser}
      });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
