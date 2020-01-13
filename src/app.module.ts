import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), TodoModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
