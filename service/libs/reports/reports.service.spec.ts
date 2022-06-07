import { Test } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { Report, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReportDto } from 'libs/dto/create-report.dto';

describe('ReportsService', () => {
    let reportsService: ReportsService;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [PrismaService, ReportsService],
        }).compile();

        reportsService = module.get<ReportsService>(ReportsService);
    });

    it('Service should be defined', async () => {
        expect(reportsService).toBeDefined();
    })

    it('createReport() - Should save an report', async () => {
        const createReportDto: CreateReportDto = {
            cashierId:1,
            clientId:1,
            saleId:1,
        }
        const savedReport: Report = await reportsService.createReport(createReportDto);

        expect(savedReport).toBeDefined();
        expect(savedReport.cashierId).toBe(createReportDto.cashierId);
    }
    )

    it('reports() - Should return reports', async () => {
            const reports: Report[] = await reportsService.reports({ where: {} });

            expect(reports).toBeDefined();
            expect(reports[0].cashierId).toBe(1);
        }
        )
});