import { Test } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { Report } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReportDto } from '../dto/create-report.dto';
import { ReportsController } from './reports.controller';
import { UpdateReportDto } from '../dto/update-report.dto';

describe('Reports Module Intergration', () => {
    let controller: ReportsController
    let prisma: PrismaService

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            controllers: [ReportsController],
            providers: [PrismaService, ReportsService],
        }).compile();

         
        controller = module.get<ReportsController>(ReportsController);
        prisma = module.get<PrismaService>(PrismaService)
    });

    describe('createReport() - Create a new Report', () => {
        const createReportDto: CreateReportDto = {
            cashierId:1,
            clientId:1,
            saleId:1,
        };

        it('createReport() - Should save an report', async () => {
            await controller.create(createReportDto);
       
            const dbReport: Report = await prisma.report.findUnique({where:{id:1}})
    
            expect(dbReport.cashierId).toBe(createReportDto.cashierId);
        }
        )
    })

    describe('Reports() - Gets Reports', () => {
        const createReportDto: CreateReportDto = {
            cashierId:1,
            clientId:1,
            saleId:1,
        };

        it('Report() - Should get an report', async () => {
            await controller.getReports();
       
            const dbReport: Report[] = await prisma.report.findMany({where:{}})
    
            expect(dbReport[0].cashierId).toBe(1);
        }
        )
    })

    describe('updateReports() - Update a Reports', () => {
        const updateReportDto: UpdateReportDto = {
            id:1,
            cashierId:1,
            clientId:1,
        };

        const id:number  = Number(1)

        it('updateReport() - Should update an report', async () => {
            await controller.update(updateReportDto);
            
       
            const dbReport: Report = await prisma.report.findUnique({where:{id}})
    
            expect(dbReport.cashierId).toBe(updateReportDto.cashierId);
        }
        )
    })
});