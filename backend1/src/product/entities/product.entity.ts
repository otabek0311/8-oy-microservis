import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {

    @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  title: string;

  @Prop()
  desc: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);