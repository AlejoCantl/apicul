import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductTypeModule } from './product-type/product-type.module';
import { ProductModule } from './product/product.module';
import { CurrentModule } from './current/current.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [ProductTypeModule, ProductModule, CurrentModule, VehicleModule, StoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
