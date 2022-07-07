import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // to make it global as @Global() does to have access in other places
    }),
    ProductModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
