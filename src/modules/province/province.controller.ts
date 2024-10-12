import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProvinceService } from './province.service';

@Controller('provinces')
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Get()
  async getAllProvinces() {
    return this.provinceService.getAllProvinces();
  }

  // Obtener una provincia por su ID
  @Get(':id')
  async getProvinceById(@Param('id') id: string) {
    return this.provinceService.getProvinceById(id);
  }

  // Crear una nueva provincia
  @Post()
  async createProvince(
    @Body() body: { province_id: string; province_name: string },
  ) {
    return this.provinceService.createProvince(body);
  }

  // Actualizar una provincia por su ID
  @Put(':id')
  async updateProvince(
    @Param('id') id: string,
    @Body() body: { province_name: string },
  ) {
    return this.provinceService.updateProvince(id, body);
  }

  // Eliminar una provincia por su ID
  @Delete(':id')
  async deleteProvince(@Param('id') id: string) {
    return this.provinceService.deleteProvince(id);
  }
}
