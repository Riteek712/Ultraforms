import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { FormSchema } from './schema/form.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    AuthModule,MongooseModule.forFeature([{name:'Form', schema: FormSchema}])],
  controllers: [FormController],
  providers: [FormService]
})
export class FormModule {}
