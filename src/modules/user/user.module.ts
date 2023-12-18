import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, ConsoleLogger } from '@nestjs/common';
import { User } from './models/user.entity';
import { UserService } from './user.service';

@Module({
  // 引入模块供自己使用
  imports: [TypeOrmModule.forFeature([User])],
  // 提供者，也就是说谁支撑起这个模块，能让这个模块得以使用
  providers: [ConsoleLogger, UserService],
  // 导出模块提供共享
  exports: [UserService],
})
export class UserModule {}
