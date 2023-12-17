import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, ConsoleLogger } from '@nestjs/common';
import { User } from './models/user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [ConsoleLogger, UserService],
  exports: [UserService],
})
export class UserModule {}
