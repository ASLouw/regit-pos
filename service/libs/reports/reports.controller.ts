import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateReportDto } from '../dto/create-report.dto';
import { UpdateReportDto } from '../dto/update-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportService: ReportsService) {}

  @MessagePattern({ cmd: 'createReport' })
  create(@Payload() createReportDto: CreateReportDto) {
    return this.reportService.createReport(createReportDto);
  }

  @MessagePattern({ cmd: 'getReport' })
  get(@Payload() id: number) {
    return this.reportService.report({ id });
  }

  @MessagePattern({ cmd: 'getReports' })
  getReports( ) {
    return this.reportService.reports({ where: {} });
  }

  @MessagePattern({ cmd: 'updateReport' })
  update(@Payload() updateReportDto: UpdateReportDto) {
    const id = updateReportDto.id    
    return this.reportService.updateReport({where:{id}, data:{cashierId:updateReportDto.cashierId, clientId:updateReportDto.clientId, saleId:updateReportDto.saleId} });
  }
}
