import { Request, Response } from 'express';
import { Users } from '../models/User.model';


export class UserService {
    // GET ALL
    getUsers(request: Request, response: Response) {
        Users.find({}, (error, users) => {
            if (error) {
                response.send(error);
            }
            response.json(users);
        })
    }

    // GET 
    getUser(request: Request, response: Response) {
        Users.findById(request.params.id, (error, user) => {
            if (error) {
                response.send(error);
            }
            console.log(request.params.id);
            console.log('\n');
            console.log(user);
            response.json(user);
        })
    }

    // POST
    addUser(request: Request, response: Response) {
        let newUser = new Users(request.body);

        newUser.save((error, user) => {
            if (error) {
                response.send(error);
            }
            response.json(user);
        });
    }

    // PUT
    updateUser(request: Request, response: Response) {
        Users.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (error, updatedUser) => {
            if (error) {
                response.send(error);
            }
            response.json(updatedUser);
        });
    }

    // DELETE
    deleteUser(request: Request, response: Response) {
        Users.deleteOne({ _id: request.params.id }, (error, deletedUser) => {
            if (error) {
                response.send(error);
            }
            response.json(deletedUser);
        });
    }
}