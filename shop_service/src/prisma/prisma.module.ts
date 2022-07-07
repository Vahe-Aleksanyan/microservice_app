import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Global() // to make this prisma module available in auth and user modules make it Global and dont forget to export the service also
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
