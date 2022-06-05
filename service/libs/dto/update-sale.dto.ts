import { Item, Report } from ".prisma/client";

export class UpdateSaleDto {
  id: number;
  totalPrice?: number;
  items?: string;
  reports?: Report[];
}
