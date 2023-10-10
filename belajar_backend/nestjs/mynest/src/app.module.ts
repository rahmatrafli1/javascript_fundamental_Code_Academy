import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerModule } from './customer/customer.module';
import { OrdersModule } from './orders/orders.module';
import { ProductCategoryModule } from './product_category/product_category.module';
import { OrderDetailModule } from './order_detail/order_detail.module';
import { LoginModule } from './login/login.module';
// import { cekToken } from './middleware/loginmiddleware';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'postgres',
        host: process.env.HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        models: [],
        autoLoadModels: true,
      }),
    }),
    UserModule,
    ProductModule,
    CustomerModule,
    OrdersModule,
    ProductCategoryModule,
    OrderDetailModule,
    LoginModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(cekToken)
  //     .exclude({
  //       path: 'login',
  //       method: RequestMethod.POST,
  //     })
  //     .forRoutes('*');
  //   // .forRoutes({
  //   //   path: 'user',
  //   //   method: RequestMethod.GET,
  //   // });
  // }
}
