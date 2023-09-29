import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userValidation = await this.usersRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    if (userValidation) throw new ForbiddenException('Usuário já cadastrado!');

    createUserDto.password = await hash(createUserDto.password, 10);

    this.usersRepository.create(createUserDto);
    await this.usersRepository.save(createUserDto);

    return {
      message: 'Usuário cadastrado com sucesso!',
    };
  }

  async findOnByEmail(email: string) : Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        email,
        active: true
      },
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
