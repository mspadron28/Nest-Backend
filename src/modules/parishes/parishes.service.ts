import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ParishesService {
  constructor(private prisma: PrismaService) {}

  // Obtener todas las parroquias
  async getAllParishes() {
    return this.prisma.parishes.findMany();
  }

  // Obtener una parroquia por su ID

  async getParishById(id: string) {
    return this.prisma.parishes.findUnique({
      where: { parish_id: id },
    });
  }

  // Obtener parroquias por su canton
  async getParishesByCantonId(cantonId: string) {
    return this.prisma.parishes.findMany({
      where: { canton_id: cantonId },
    });
  }

  // Crear una nueva parroquia
  async createParish(data: {
    parish_id: string;
    parish_name: string;
    canton_id: string;
    is_urban: boolean;
  }) {
    return this.prisma.parishes.create({
      data,
    });
  }

  // Actualizar una parroquia por su ID
  async updateParish(
    id: string,
    data: { parish_name: string; is_urban: boolean },
  ) {
    return this.prisma.parishes.update({
      where: { parish_id: id },
      data,
    });
  }

  // Eliminar una parroquia por su ID
  async deleteParish(id: string) {
    return this.prisma.parishes.delete({
      where: { parish_id: id },
    });
  }
}
