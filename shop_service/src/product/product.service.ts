import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async addProduct(data, userId) {
    console.log(3);
    const product = await this.prisma.article.create({
      data: {
        ...data.body,
        userId: userId,
      },
    });
    console.log(4);
    return product;
  }
}
