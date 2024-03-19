import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig = (
        configService: ConfigService
): TypeOrmModuleOptions => {
  return {
        type: 'mysql',
        host: configService.get('db.host'),
        port: configService.get('db.port'),
        username: configService.get('db.username'),
        password: configService.get('db.password'),
        database: configService.get('db.database'),
        entities: [__dirname + '/../**/**/*.entity{.ts,.js}',],
        synchronize: configService.get('typeorm.synchronize'),
  };
};

const getTypeOrmConfigAsync = async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleOptions> => {
        return typeOrmConfig(configService)
      };
      
export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
        inject: [ConfigService],
        useFactory: (configService: ConfigService) =>
        getTypeOrmConfigAsync(configService),
};