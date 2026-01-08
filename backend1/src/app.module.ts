import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ProductModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: "otabek0311",
    database: 'nestjsdb',
    synchronize: true,
    autoLoadEntities: true
  }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
