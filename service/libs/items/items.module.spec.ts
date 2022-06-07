import { Test } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { Item } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemDto } from '../dto/create-item.dto';
import { ItemsController } from './items.controller';
import { UpdateItemDto } from '../dto/update-item.dto';

describe('Items Module Intergration', () => {
    let controller: ItemsController
    let prisma: PrismaService

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            controllers: [ItemsController],
            providers: [PrismaService, ItemsService],
        }).compile();

         
        controller = module.get<ItemsController>(ItemsController);
        prisma = module.get<PrismaService>(PrismaService)
    });

    describe('createItem() - Create a new Item', () => {
        const createItemDto: CreateItemDto = {
            name: 'apple',
            price: 10
        };

        it('createItem() - Should save an item', async () => {
            await controller.create(createItemDto);
       
            const dbItem: Item = await prisma.item.findUnique({where:{id:1}})
    
            expect(dbItem.name).toBe(createItemDto.name);
        }
        )
    })

    describe('Items() - Gets Items', () => {
        const createItemDto: CreateItemDto = {
            name: 'apple',
            price: 10
        };

        it('Item() - Should get an item', async () => {
            await controller.getItems();
       
            const dbItem: Item[] = await prisma.item.findMany({where:{}})
    
            expect(dbItem[0].name).toBe('apple');
        }
        )
    })

    describe('updateItems() - Update a Items', () => {
        const updateItemDto: UpdateItemDto = {
            id:1,
            name: "apple",
        };

        const id:number  = Number(1)

        it('updateItem() - Should update an item', async () => {
            await controller.update(updateItemDto);
            
       
            const dbItem: Item = await prisma.item.findUnique({where:{id}})
    
            expect(dbItem.name).toBe(updateItemDto.name);
        }
        )
    })
});