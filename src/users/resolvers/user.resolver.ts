import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UserService } from "../services/user.service";
import { UserDto } from "../dto/types/user.dto";
import { UserInput } from "../dto/inputs/user.input";
import { Injectable } from "@nestjs/common";

@Resolver()
@Injectable()
export class UsersResolver {
      constructor(
        private readonly userService: UserService,
      ) {}

    @Query(() => String)
    async hello() {
        return 'hello';
    }

    @Query(() => [UserDto])
    async users() {
        return this.userService.findAll();
    }

    @Mutation(() => [UserDto])
    async createUser(@Args('input') input: UserInput) {
        return this.userService.create(input);
    }

}