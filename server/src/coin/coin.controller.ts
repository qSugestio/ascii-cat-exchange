import { Body, Controller, Post } from '@nestjs/common';
import { CoinService } from './coin.service';

@Controller('coin')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}

  @Post('create')
  create(@Body() { coinName }: { coinName: string }) {
    return this.coinService.create(coinName);
  }
}
