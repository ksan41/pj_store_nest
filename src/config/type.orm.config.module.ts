import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from 'src/domain/user/user.entity';
import { Address } from 'src/domain/user/address';
import { PointEntity } from 'src/domain/point/point.entity';
import { GradeEntity } from 'src/domain/grade/grade.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'myshop',
        entities: [UserEntity, Address, PointEntity, GradeEntity],
        synchronize: true,
};