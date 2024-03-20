import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { databaseConfig } from '../../config/load.yaml';

export const typeOrmConfig = (
        configService: ConfigService
): TypeOrmModuleOptions => {
  const database = configService.get<databaseConfig["db"]>('db');
  return {
        type: 'mysql',
        host: database.host,
        port: database.port,
        username: database.username,
        password: database.password,
        database: database.database,
        entities: [__dirname + '/../**/**/*.entity{.ts,.js}',],
        synchronize: database.synchronize,
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