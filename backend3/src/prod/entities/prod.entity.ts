import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class Product {
  @Prop()
  id: number;

  @Prop()
  title: string;

  @Prop()
  desc: string;
}

export type Prod = HydratedDocument<Product>;

export const ProductSchema = SchemaFactory.createForClass(Product);


