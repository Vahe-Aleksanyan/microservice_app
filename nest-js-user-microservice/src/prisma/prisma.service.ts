import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { config } from "rxjs";
import { ConfigService } from "@nestjs/config";
// extend prisma client which allows to connect to db. configure its configurations
@Injectable() // for any class to use dependency injection anotate with injectable
export class PrismaService extends PrismaClient{
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL')
        },
      },
    });
  }
}
