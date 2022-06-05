import { Item } from ".prisma/client";

export class CreateSaleDto {
  totalPrice: number;
  items: string;
}
