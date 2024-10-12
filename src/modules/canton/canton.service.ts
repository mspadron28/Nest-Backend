import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CantonService {
  constructor(private prisma: PrismaService) {}

  // Obtener todos los cantones
  async getAllCantons() {
    return this.prisma.cantons.findMany();
  }

  // Obtener un cantón por su ID
  /*async getCantonById(id: string) {
    return this.prisma.cantons.findUnique({
      where: { canton_id: id },
    });
  }*/
  async getCantonsByProvinceId(provinceId: string) {
    return this.prisma.cantons.findMany({
      where: {
        province_id: provinceId,
      },
    });
  }

  // Crear un nuevo cantón
  async createCanton(data: {
    canton_id: string;
    canton_name: string;
    province_id: string;
  }) {
    return this.prisma.cantons.create({
      data,
    });
  }

  // Actualizar un cantón por su ID
  async updateCanton(id: string, data: { canton_name: string }) {
    return this.prisma.cantons.update({
      where: { canton_id: id },
      data,
    });
  }

  // Eliminar un cantón por su ID
  async deleteCanton(id: string) {
    return this.prisma.cantons.delete({
      where: { canton_id: id },
    });
  }
}
