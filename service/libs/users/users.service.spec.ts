import { Test } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from 'libs/dto/create-user.dto';

describe('UsersService', () => {
    let usersService: UsersService;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [PrismaService, UsersService],
        }).compile();

        usersService = module.get<UsersService>(UsersService);
    });

    it('Service should be defined', async () => {
        expect(usersService).toBeDefined();
    })

    it('createUser() - Should save an user', async () => {
        const createUserDto: CreateUserDto = {
            name: 'test',
            email: 'test@mail',
            role: 'Client'
        }
        const savedUser: User = await usersService.createUser(createUserDto);

        expect(savedUser).toBeDefined();
        expect(savedUser.name).toBe(createUserDto.name);
    }
    )

    it('users() - Should return users', async () => {
            const users: User[] = await usersService.users({ where: {} });

            expect(users).toBeDefined();
            expect(users[0].name).toBe('test');
        }
        )
       
});