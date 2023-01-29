import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { employeeDto } from 'src/common/DTO/employee-dto';
import { employee } from 'src/entity/employee';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(employee)
    private employeeRepository: Repository<employee>,
  ) {}
  // getemployee() {}
  createemployee(dto: employeeDto) {
    const emp = this.employeeRepository.create({
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
      password: dto.password,
    });

    return this.employeeRepository.save(emp);
  }
  getemployee() {
    const emp = this.employeeRepository.find({
      where: {
        is_deleted: false,
      },
    });
    return emp;
  }
  async updateemployee(id: number, dto: employeeDto) {
    const emp = await this.employeeRepository.update({ id }, { ...dto });
    // return emp;
  }
  deleteemployee(id: number) {
    const emp = this.employeeRepository.delete({});
  }
}
