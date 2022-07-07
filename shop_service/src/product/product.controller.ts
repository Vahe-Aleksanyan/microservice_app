import { Controller, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { MessagePattern } from '@nestjs/microservices';
import { JwtGuard } from './guard';
import { Request } from 'express';

@Controller('product')
export class ProductController {
  constructor(private readonly userService: ProductService) {}

  //@UseGuards(JwtGuard)
  @MessagePattern({ cmd: 'add_product' })
  async getMe(data) {
    return await this.userService.addProduct(data);
  }
}
