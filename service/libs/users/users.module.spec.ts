import { Test } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersController } from './users.controller';
import { UpdateUserDto } from '../dto/update-user.dto';

describe('Users Module Intergration', () => {
    let controller: UsersController
    let prisma: PrismaService

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [PrismaService, UsersService],
        }).compile();

         
        controller = module.get<UsersController>(UsersController);
        prisma = module.get<PrismaService>(PrismaService)
    });

    describe('createUser() - Create a new User', () => {
        const createUserDto: CreateUserDto = {
            name: 'test',
            email: 'test@mail',
            role: 'Client'
        };

        it('createUser() - Should save an user', async () => {
            await controller.create(createUserDto);
       
            const dbUser: User = await prisma.user.findUnique({where:{id:1}})
    
            expect(dbUser.name).toBe(createUserDto.name);
        }
        )
    })

    describe('Users() - Gets Users', () => {
        const createUserDto: CreateUserDto = {
            name: 'test',
            email: 'test@mail',
            role: 'Client'
        };

        it('User() - Should get an user', async () => {
            await controller.getUsers();
       
            const dbUser: User[] = await prisma.user.findMany({where:{}})
    
            expect(dbUser[0].name).toBe('test');
        }
        )
    })

    describe('updateUsers() - Update a Users', () => {
        const updateUserDto: UpdateUserDto = {
            id:1,
            name: 'test',
        };

        const id:number  = Number(1)

        it('updateUser() - Should update an user', async () => {
            await controller.update(updateUserDto);
            
       
            const dbUser: User = await prisma.user.findUnique({where:{id}})
    
            expect(dbUser.name).toBe(updateUserDto.name);
        }
        )
    })
});