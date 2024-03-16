import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './domain/user/user.entity';
import { UserService } from './domain/user/service/user.service';
import { Address } from './domain/user/address';
import { ProductEntity } from './domain/product/product.entity';
import { PointEntity } from './domain/point/point.entity';
import { GradeEntity } from './domain/grade/grade.entity';
import { PointDetail } from './domain/point/vo/point.detail';
import { RateCondition } from './domain/grade/vo/rate.condition';
import { UserInfo } from './domain/user/vo/user.info';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'myshop',
      entities: [UserEntity, Address, PointEntity, GradeEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
