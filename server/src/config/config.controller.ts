import { Controller, Get, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('config')
export class ConfigController {
  private readonly logger = new Logger(ConfigController.name);
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getConfig() {
    this.logger.log('Requesting config...');
    const appid = this.configService.get<string>('APPID');
    const secret = this.configService.get<string>('SECRET');
    return { appid, secret };
  }
}