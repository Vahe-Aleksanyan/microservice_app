import { Body, Controller, Inject, Post, Req } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateProductDto } from "./dto/CreateProduct.dto";
import { Request } from "express";


@Controller('products')
export class ProductController {
  constructor(
    @Inject('PRODUCT_SERVICE') private productService: ClientProxy,
  ) {}

  @Post() // get userId by decorator
  addProduct(@Req() req: Request, @Body() dto: CreateProductDto) {
    console.log(1);
    return this.productService.send({ cmd: 'add_product' }, { headers: req.headers, body: dto });
  }
}
