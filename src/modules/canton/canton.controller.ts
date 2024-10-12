import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CantonService } from './canton.service';

@Controller('cantons')
export class CantonController {
  constructor(private readonly cantonService: CantonService) {}

  // Obtener todos los cantones
  @Get()
  async getAllCantons() {
    return this.cantonService.getAllCantons();
  }

  // Obtener un cantón por su ID
  /*@Get(':id')
  async getCantonById(@Param('id') id: string) {
    return this.cantonService.getCantonById(id);
  }*/
  @Get(':province_id')
  async getCantonById(@Param('province_id') provinceId: string) {
    console.log(provinceId);
    return this.cantonService.getCantonsByProvinceId(provinceId);
  }

  // Crear un nuevo cantón
  @Post()
  async createCanton(
    @Body()
    body: {
      canton_id: string;
      canton_name: string;
      province_id: string;
    },
  ) {
    return this.cantonService.createCanton(body);
  }

  // Actualizar un cantón por su ID
  @Put(':id')
  async updateCanton(
    @Param('id') id: string,
    @Body() body: { canton_name: string },
  ) {
    return this.cantonService.updateCanton(id, body);
  }

  // Eliminar un cantón por su ID
  @Delete(':id')
  async deleteCanton(@Param('id') id: string) {
    return this.cantonService.deleteCanton(id);
  }
}
