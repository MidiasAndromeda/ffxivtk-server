import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class UserDto {
    @Field(() => ID)
    id: string;

    @Field()
    readonly name: string;
}