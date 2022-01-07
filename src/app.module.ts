import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import { TodoModule } from './todo/todo.module';

// Similar to main class in Java
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'sqlite',
      autoLoadEntities: true,
      synchronize: true,
      database: path.resolve(__dirname, '..', 'db.sqlite')
    }),
    TodoModule
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
