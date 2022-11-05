import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlanetService {
  constructor(private prisma: PrismaService) {}
  async findOne(id: number) {
    return this.prisma.planet.findFirst();
  }
}
