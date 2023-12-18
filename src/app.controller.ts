import { Controller, Get } from '@nestjs/common';
import { UserService } from './modules/user/user.service';
import { User } from './modules/user/models/user.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  async create(): Promise<boolean> {
    return await this.userService.create({
      name: '水滴超级管理员',
      desc: '管理员',
      tel: '99999',
      password: '123456777',
      account: 'admin',
    });
  }

  @Get('/del')
  async del(): Promise<boolean> {
    return await this.userService.del('b800ec0c-6fe6-45d7-b60a-75fb2ddca09c');
  }

  @Get('/update')
  async update(): Promise<boolean> {
    return await this.userService.update(
      '6fada8b0-20ae-4098-9a1e-2a305418a071',
      {
        name: '水滴超级管理员',
        desc: '管理员',
        tel: '99999',
        password: '123456777',
        account: 'admin',
      },
    );
  }

  @Get('/find')
  async find(): Promise<User> {
    return await this.userService.find('f48bc745-0650-415b-83c4-091367fb4192');
  }
}
