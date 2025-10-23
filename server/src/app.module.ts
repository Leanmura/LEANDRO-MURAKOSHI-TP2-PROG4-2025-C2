import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublicacionesController } from './publicaciones/publicaciones.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PublicacionesModule } from './publicaciones/publicaciones.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [AuthModule, PublicacionesModule, UsuariosModule],
  controllers: [AppController, PublicacionesController, UsuariosController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
