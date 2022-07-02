import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemStockRepository } from 'src/repositories/itemStock.repository';
import { Repository } from 'typeorm';
import { ItemStock } from './entity/itemStock.model';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ItemStockRepository)
    private stockRepository: ItemStockRepository,
  ) {}
  async create(stock: ItemStock): Promise<ItemStock> {
    return await this.stockRepository.save(stock);
  }
  async modifyCrades(id: number, amount: number) {
    const post = await this.stockRepository.findOne({ id: id });
    post.crades += amount;
    await this.stockRepository.save(post);
    return post.crades;
  }
  async modifyBottles(id: number, amount: number) {
    const post = await this.stockRepository.findOne({ id: id });
    post.bottles += amount;
    await this.stockRepository.save(post);
    return post.bottles;
  }
  async modifyBoxes(id: number, amount: number) {
    const post = await this.stockRepository.findOne({ id: id });
    post.boxes += amount;
    await this.stockRepository.save(post);
    return post.boxes;
  }

  async getGroup(id: number) {
    const post = await this.stockRepository.findOne({ id: id });
    return post;
  }

  async getInventory() {
    return await this.stockRepository.find();
  }
/*
  async remove(id: number) {
    return await this.stockRepository.delete({id: id});
  }
*/
}
