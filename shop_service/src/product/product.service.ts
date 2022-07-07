import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async addProduct(req) {
    console.log(3);
    const product = await this.prisma.article.create({
      data: {
        ...req.body,
        userId: req.userId,
      },
    });
    console.log(4);
    return product;
  }
}
