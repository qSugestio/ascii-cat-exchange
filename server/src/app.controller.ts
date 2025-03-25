import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('get/:id')
  // getHello(@Param('id', ParseIntPipe) id: number) {
  //   if (id < 1) {
  //     throw new BadRequestException('if < 0 = error');
  //   }
  //   return id;
  // }

  // @UsePipes(new ValidationPipe())
  // @Post('create')
  // async create(@Body() dto: CreateDto) {
  //   const res = await this.appService.save(dto);
  //   return res;
  // }
}
