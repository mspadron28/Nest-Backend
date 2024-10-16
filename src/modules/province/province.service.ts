import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ProvinceService {
  constructor(private prisma: PrismaService) {}

  // Obtener todas las provincias
  async getAllProvinces() {
    return this.prisma.provinces.findMany();
  }

  // Obtener una provincia por su ID
  async getProvinceById(id: string) {
    return this.prisma.provinces.findUnique({
      where: { province_id: id },
    });
  }

  // Crear una nueva provincia
  async createProvince(data: { province_id: string; province_name: string }) {
    return this.prisma.provinces.create({
      data,
    });
  }

  // Actualizar una provincia por su ID
  async updateProvince(id: string, data: { province_name: string }) {
    return this.prisma.provinces.update({
      where: { province_id: id },
      data,
    });
  }

  // Eliminar una provincia por su ID
  async deleteProvince(id: string) {
    return this.prisma.provinces.delete({
      where: { province_id: id },
    });
  }
}
