import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Sale, Prisma } from '@prisma/client';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}

  async sale(
    saleWhereUniqueInput: Prisma.SaleWhereUniqueInput,
  ): Promise<Sale | null> {
    const id:number  = Number(saleWhereUniqueInput.id['id'])
    return this.prisma.sale.findUnique({
      where: {id},
    });
  }

  async sales(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SaleWhereUniqueInput;
    where?: Prisma.SaleWhereInput;
    orderBy?: Prisma.SaleOrderByWithRelationInput;
  }): Promise<Sale[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.sale.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createSale(data: Prisma.SaleCreateInput): Promise<Sale> {
    return this.prisma.sale.create({
      data,
    });
  }

  async updateSale(params: {
    where: Prisma.SaleWhereUniqueInput;
    data: Prisma.SaleUpdateInput;
  }): Promise<Sale> {
    const { where, data } = params;
    const id:number  = Number(where.id);

    return this.prisma.sale.update({
      data,
      where:{id},
    });
  }

  async deleteSale(where: Prisma.SaleWhereUniqueInput): Promise<Sale> {
    return this.prisma.sale.delete({
      where,
    });
  }
}
