import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { UpdateIdeaDto } from './dto/update-idea.dto';
import { Idea, IdeaDocument } from './entities/idea.entity';

@Injectable()
export class IdeaService {
  constructor(@InjectModel(Idea.name) private readonly ideaSchema: Model<IdeaDocument>) {}

  async create(createIdeaDto: CreateIdeaDto) {
    try {
      const idea = new this.ideaSchema({
        ...createIdeaDto
      })
      const result = await idea.save()
      return result
    } catch(error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  async findAll() {
    return await this.ideaSchema.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} idea`;
  }

  update(id: number, updateIdeaDto: UpdateIdeaDto) {
    return `This action updates a #${id} idea`;
  }

  remove(id: number) {
    return `This action removes a #${id} idea`;
  }
}
