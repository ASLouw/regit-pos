import { Test } from '@nestjs/testing';
import { SalesService } from './sales.service';
import { Sale, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSaleDto } from 'libs/dto/create-sale.dto';

describe('SalesService', () => {
    let salesService: SalesService;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [PrismaService, SalesService],
        }).compile();

        salesService = module.get<SalesService>(SalesService);
    });

    it('Service should be defined', async () => {
        expect(salesService).toBeDefined();
    })

    it('createSale() - Should save an sale', async () => {
        const createSaleDto: CreateSaleDto = {
            items: 'apple',
            totalPrice: 10
        }
        const savedSale: Sale = await salesService.createSale(createSaleDto);

        expect(savedSale).toBeDefined();
        expect(savedSale.items).toBe(createSaleDto.items);
    }
    )

    it('sales() - Should return sales', async () => {
            const sales: Sale[] = await salesService.sales({ where: {} });

            expect(sales).toBeDefined();
            expect(sales[0].items).toBe('apple');
        }
        )
});