import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ParishesService } from './parishes.service';

@Controller('parishes')
export class ParishesController {
  constructor(private readonly parishesService: ParishesService) {}

  // Obtener todas las parroquias
  @Get()
  async getAllParishes() {
    return this.parishesService.getAllParishes();
  }
  // Obtener parroquias por su canton id
  @Get(':canton_id')
  async getParishesByCantonId(@Param('canton_id') cantonId: string) {
    return this.parishesService.getParishesByCantonId(cantonId);
  }

  // Obtener una parroquia por su ID

  @Get(':id/info')
  async getParishById(@Param('id') id: string) {
    return this.parishesService.getParishById(id);
  }

  // Crear una nueva parroquia
  @Post()
  async createParish(
    @Body()
    body: {
      parish_id: string;
      parish_name: string;
      canton_id: string;
      is_urban: boolean;
    },
  ) {
    return this.parishesService.createParish(body);
  }

  // Actualizar una parroquia por su ID
  @Put(':id')
  async updateParish(
    @Param('id') id: string,
    @Body() body: { parish_name: string; is_urban: boolean },
  ) {
    return this.parishesService.updateParish(id, body);
  }

  // Eliminar una parroquia por su ID
  @Delete(':id')
  async deleteParish(@Param('id') id: string) {
    return this.parishesService.deleteParish(id);
  }
}
