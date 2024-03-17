import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/type.orm.config.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
