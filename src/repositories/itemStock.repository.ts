import { ItemStock } from "../entity/itemStock.model";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ItemStock)
export class ItemStockRepository extends  Repository<ItemStock> {
}