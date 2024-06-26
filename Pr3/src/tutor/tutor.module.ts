import { Module } from '@nestjs/common';
import { TutorService } from './tutor.service';
import { TutorController } from './tutor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutor } from './entities/tutor.entity';

@Module({
  controllers: [TutorController],
  providers: [TutorService],
  imports: [TypeOrmModule.forFeature([Tutor])  ],
  exports: [ TypeOrmModule ],
})
export class TutorModule {}
