import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemStock } from 'src/entity/itemStock.model';
import { ItemStockRepository } from 'src/repositories/itemStock.repository';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'stock.db',
      synchronize: true,
    entities: [ItemStock]
    }),
    TypeOrmModule.forFeature([ItemStockRepository])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
