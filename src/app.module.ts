import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatServiceModule } from './cat-service/cat-service.module';

@Module({
  imports: [CatServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
