import 'dotenv/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { LoginGuard } from './login/login.guard';
// import { JwtService } from '@nestjs/jwt';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  // const reflector = app.get(Reflector);

  const port = process.env.PORT;
  // app.useGlobalGuards(new LoginGuard(new JwtService(), reflector));
  await app.listen(port, () => console.log(`Server listening on port ${port}`));
}
bootstrap();
