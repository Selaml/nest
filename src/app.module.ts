import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { employee } from './entity/employee';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      password: '',
      database: 'test_db',
      entities: [employee],
      synchronize: true,
    }),
    EmployeeModule,
  ],
})
export class AppModule {}
