import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { TimeEntriesModule } from './time-entries/time-entries.module';
import { UsersModule } from './usersPage/usersPage.module';
import { UsersPageService } from './users-page/users-page.service';
import { UsersPageModule } from './users-page/users-page.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotEnv').config();
// reminder to create dotenv
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User],
      synchronize: false,
    }),
    UserModule,
    AuthModule,
    ProjectsModule,
    TimeEntriesModule,
    UsersModule,
    UsersPageModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersPageService],
})
export class AppModule {}
