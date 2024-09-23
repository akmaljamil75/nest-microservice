import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  async getHello(@Param('name') name : string, @Res() res : Response): Promise<any> {
    return res.status(200).json({
      status : "success",
      data : await this.appService.getHello(name)
    })
  }
}
