import {Controller, Get, Post, Render, Param, Res, Query} from '@nestjs/common';
import { AppService } from './app.service';
import {ItemStock} from "./entity/itemStock.model";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  @Render('index')
  async index() {
    const data = (await this.appService.getInventory()).sort((a,b) => (a.name.toLowerCase() >= b.name.toLocaleLowerCase()) ? 1 : -1);
    return {
      data
    };
  }

  @Get('modifyCradesOnStock/:id/:stockChange')
  async modifyCradesOnStock(@Param('stockChange') stockChange: string, @Res() res,
    @Param('id') id: string,
  ): Promise<number> {
    await this.appService.modifyCrades(+id, +stockChange);
    return await res.redirect('/editGroup/' + id);
  }

  @Render('details')
  @Get('editGroup/:id')
  async editGroup(
                            @Param('id') id: string,
  ): Promise<ItemStock> {
    const group = await this.appService.getGroup(+id);
    return group;
  }


  @Get('modifyBottlesOnStock/:id/:stockChange')
  async modifyBottlesOnStock(@Param('stockChange') stockChange: string,
                             @Param('id') id: string,
                             @Res() res,
  ) {
    await this.appService.modifyBottles(+id, +stockChange);
    return await res.redirect('/editGroup/' + id);
  }

  @Get('modifyBoxesOnStock/:id/:stockChange')
  async modifyBoxesOnStock(
      @Param('stockChange') stockChange: string,
      @Param('id') id: string,
      @Res() res,
  ) {
    await this.appService.modifyBoxes(+id, Number(stockChange));
    return await res.redirect('/editGroup/' + id);
  }

  @Get('addGroup')
  async addGroup(
      @Query('groupName') groupName: string,
      @Res() res,
  ) {
    await this.appService.create({ boxes: 0, crades: 0, bottles: 0, name: groupName, id: null });
    return await res.redirect('/');
  }
  /*
  @Get('removeGroup/:id')
  async removeGroup(
      @Param('id') id: string,
      @Res() res,
  ) {
    await this.appService.remove(+id);
    return await res.redirect('/');
  }
  */
}
