import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [ProductController],
  providers: [ProductService],
})

// @Module({
//   imports: [ConfigModule, PassportModule, JwtModule.register({})],
//   controllers: [ProductController],
//   providers: [ProductService, JwtStrategy, LocalStrategy],
//
// })
export class ProductModule {}
