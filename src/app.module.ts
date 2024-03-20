import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './domain/user/user.module';
import { typeOrmAsyncConfig } from './config/type.orm.config.module';
import loadYaml from 'config/load.yaml';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [loadYaml]
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UserModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
