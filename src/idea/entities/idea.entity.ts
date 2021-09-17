import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Idea {

    @Prop()
    title: string

    @Prop()
    problem: string

    @Prop()
    solution: string
}

export type IdeaDocument = Idea & Document
export const IdeaSchema = SchemaFactory.createForClass(Idea)
