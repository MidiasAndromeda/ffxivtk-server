import * as jwt from 'jsonwebtoken';

class User {
    username: String;
    password: String;
}
export class Authentication {

    users: User[] = [
        {
            username: "Anthony",
            password: "hashpassword"
        },
        {
            username: "Pierre",
            password: "hashpassword"
        }
    ];
}