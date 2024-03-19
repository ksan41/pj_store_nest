import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './domain/user/user.module';
import config from 'config/config';
import { typeOrmAsyncConfig } from './config/type.orm.config.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UserModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
