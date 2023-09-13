import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionModule } from './question/question.module';
// import { FormResponceModule } from './form-responce/form-responce.module';
import { ResponseColModule } from './response-col/response-col.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URI)
    ,FormModule, QuestionModule,  ResponseColModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
