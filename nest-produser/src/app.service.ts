import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  
  constructor(
    @Inject('CONSUMER_SERVICE') private userService: ClientProxy
) {}

  async getHello(name : string): Promise<any> {
    return await lastValueFrom(this.userService.send("hello", {name : name}));;
  }

}
 