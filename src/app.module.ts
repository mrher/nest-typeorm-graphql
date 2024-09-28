import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PhotoResolver } from './photo/photo.resolver';
import { PhotoService } from './photo/photo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo/photo.entity';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    TypeOrmModule.forFeature([Photo]),
  ],
  controllers: [AppController],
  providers: [AppService, PhotoResolver, PhotoService],
})
export class AppModule {}
