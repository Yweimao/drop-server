import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ywm123456',
      database: 'water-drop',
      //哪些文件是数据表的映射文件
      entities: [`${__dirname}/../modules/**/*.entity{.ts,js,}`],
      // 开启日志
      logging: true,
      synchronize: true,
      //自动初始化
      autoLoadEntities: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
