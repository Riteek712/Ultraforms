import { Module } from '@nestjs/common';
import { ResponseColController } from './response-col.controller';
import { ResponseColService } from './response-col.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponseColSchema } from './schema/responseCol.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule,MongooseModule.forFeature([{
    name:'ResponseCol', schema: ResponseColSchema
  }])],
  controllers: [ResponseColController],
  providers: [ResponseColService]
})
export class ResponseColModule {}
