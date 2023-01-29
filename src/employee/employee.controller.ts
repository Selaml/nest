import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { employeeDto } from 'src/common/DTO/employee-dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}
  @Post()
  createemployee(@Body() dto: employeeDto) {
    return this.employeeService.createemployee(dto);
  }
  @Get()
  getemployee() {
    return this.employeeService.getemployee();
  }
  @Put(':id')
  async updateemployee(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: employeeDto,
  ) {
    return await this.employeeService.updateemployee(id, dto);
  }
}
