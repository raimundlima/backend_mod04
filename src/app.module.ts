import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { PerfilModule } from './perfil/perfil.module';
import { GamesModule } from './games/games.module';
import { GenreModule } from './genre/genre.module';

@Module({
  
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports:[UserModule, PerfilModule, GamesModule, GenreModule]
})
export class AppModule {}
