import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatServicesDocument = HydratedDocument<CatServices>;

@Schema({collection: 'Services'})
export class CatServices {
    @Prop()
    service_code: string;
    @Prop()
    service_name: string;
    @Prop()
    service_description: string;
    @Prop()
    price: number;
    @Prop()
    fee: number;
    @Prop()
    enable: boolean;
    @Prop()
    create_date: Date;
}

export const CatServicesSchema = SchemaFactory.createForClass(CatServices);
