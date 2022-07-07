import { Controller, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { MessagePattern } from '@nestjs/microservices';
import { JwtGuard } from './guard';
import { GetUser } from './decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly userService: ProductService) {}

  @UseGuards(JwtGuard)
  @MessagePattern({ cmd: 'add_product' })
  async getMe(data: any, @GetUser('id') userId: number) {
    return await this.userService.addProduct(data, userId);
  }
}
