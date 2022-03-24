import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { BlogController } from './controller/blog.controller';
import { BlogEntryEntity } from './models/blog-entry.entity';
import { BlogService } from './service/blog.service';

@Module({
  imports: [
      TypeOrmModule.forFeature([BlogEntryEntity]),
      AuthModule,
      UserModule
  ],
  controllers: [],
  providers: []
})
export class BlogModule {}
