import { Test } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { Item, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemDto } from 'libs/dto/create-item.dto';

describe('ItemsService', () => {
    let itemsService: ItemsService;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [PrismaService, ItemsService],
        }).compile();

        itemsService = module.get<ItemsService>(ItemsService);
    });

    it('Service should be defined', async () => {
        expect(itemsService).toBeDefined();
    })

    it('createItem() - Should save an item', async () => {
        const createItemDto: CreateItemDto = {
            name: 'apple',
            price: 10
        }
        const savedItem: Item = await itemsService.createItem(createItemDto);

        expect(savedItem).toBeDefined();
        expect(savedItem.name).toBe(createItemDto.name);
    }
    )

    it('items() - Should return items', async () => {
            const items: Item[] = await itemsService.items({ where: {} });

            expect(items).toBeDefined();
            expect(items[0].name).toBe('apple');
        }
        )
       


    // it('updateItem() - Should update an item', async () => {
    //     const updateItemDto: UpdateItemDto = {
    //         id: 1,
    //         price: 15
    //     }
    //     const updatedItem: Item = await itemsService.updateItem({ data: { price: 15 }, where: { id:1  } });

    //     expect(updatedItem).toBeDefined();
    //     expect(updatedItem.price).toBe("15");
    // }
    // )

   

    // it('deleteItem - Should delete an item', async () => {
    //     const id: number = 1
    //     const item: Item = await itemsService.deleteItem({ id });

    //     expect(item).toBeDefined();
    //     expect(item.name).toBe('apple');
    // }
    // )
});