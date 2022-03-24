import { Module,forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';



@Module({
  imports: [
  
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    AuthModule,
    UserModule,
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
