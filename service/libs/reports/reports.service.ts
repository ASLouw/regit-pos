import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Report, Prisma } from '@prisma/client';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async report(
    reportWhereUniqueInput: Prisma.ReportWhereUniqueInput,
  ): Promise<Report | null> {
    const id:number  = Number(reportWhereUniqueInput.id['id'])

    return this.prisma.report.findUnique({
      where: {id},
    });
  }

  async reports(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ReportWhereUniqueInput;
    where?: Prisma.ReportWhereInput;
    orderBy?: Prisma.ReportOrderByWithRelationInput;
  }): Promise<Report[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.report.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createReport(data: Prisma.ReportCreateInput): Promise<Report> {
    const cashierId:number  = Number(data.cashierId);
    const clientId:number  = Number(data.clientId);
    const saleId:number  = Number(data.saleId);

    data.cashierId = Number(data.cashierId);
    data.clientId= Number(data.clientId);
    data.saleId= Number(data.saleId);
    
    return this.prisma.report.create({
      data
    });
  }

  async updateReport(params: {
    where: Prisma.ReportWhereUniqueInput;
    data: Prisma.ReportUpdateInput;
  }): Promise<Report> {
    const { where, data } = params;
    const id:number  = Number(where.id);


    if(data.cashierId)
      data.cashierId = Number(data.cashierId);

    if(data.clientId)
      data.clientId= Number(data.clientId);

    if(data.saleId)
      data.saleId= Number(data.saleId);

    return this.prisma.report.update({
      data,
      where:{id},
      
    });
  }

  async deleteReport(where: Prisma.ReportWhereUniqueInput): Promise<Report> {
    return this.prisma.report.delete({
      where,
    });
  }
}
