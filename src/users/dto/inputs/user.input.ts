import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class UserInput {

    @Field(() => ID)
    id: string;

    @Field()
    readonly name: string;
}