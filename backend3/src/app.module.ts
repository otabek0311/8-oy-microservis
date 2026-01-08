import { Module } from '@nestjs/common';
import { ProdModule } from './prod/prod.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProdModule,
    MongooseModule.forRoot("mongodb+srv://abdullayevotabek414_db_user:<caLk2JbU11M7nQdg>@cluster0.0aye8gw.mongodb.net/?appName=Cluster0")
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
