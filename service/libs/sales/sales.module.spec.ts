import { Test } from '@nestjs/testing';
import { SalesService } from './sales.service';
import { Sale } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSaleDto } from '../dto/create-sale.dto';
import { SalesController } from './sales.controller';
import { UpdateSaleDto } from '../dto/update-sale.dto';

describe('Sales Module Intergration', () => {
    let controller: SalesController
    let prisma: PrismaService

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            controllers: [SalesController],
            providers: [PrismaService, SalesService],
        }).compile();

         
        controller = module.get<SalesController>(SalesController);
        prisma = module.get<PrismaService>(PrismaService)
    });

    describe('createSale() - Create a new Sale', () => {
        const createSaleDto: CreateSaleDto = {
            items: 'apple',
            totalPrice: 10
        };

        it('createSale() - Should save an sale', async () => {
            await controller.create(createSaleDto);
       
            const dbSale: Sale = await prisma.sale.findUnique({where:{id:1}})
    
            expect(dbSale.items).toBe(createSaleDto.items);
        }
        )
    })

    describe('Sales() - Gets Sales', () => {
        const createSaleDto: CreateSaleDto = {
            items: 'apple',
            totalPrice: 10
        };

        it('Sale() - Should get an sale', async () => {
            await controller.getSales();
       
            const dbSale: Sale[] = await prisma.sale.findMany({where:{}})
    
            expect(dbSale[0].items).toBe('apple');
        }
        )
    })

    describe('updateSales() - Update a Sales', () => {
        const updateSaleDto: UpdateSaleDto = {
            id:1,
            items: "apple",
        };

        const id:number  = Number(1)

        it('updateSale() - Should update an sale', async () => {
            await controller.update(updateSaleDto);
            
       
            const dbSale: Sale = await prisma.sale.findUnique({where:{id}})
    
            expect(dbSale.items).toBe(updateSaleDto.items);
        }
        )
    })
});