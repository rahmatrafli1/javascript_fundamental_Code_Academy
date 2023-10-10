import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { customers } from 'models';

@Module({
  imports: [SequelizeModule.forFeature([customers])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
