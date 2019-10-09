import { Request, Response } from 'express';
import { User } from '../models/User.model';


export class UserService {
    // GET ALL
    getUsers(request: Request, response: Response) {
        User.find({}, (error, users) => {
            if (error) {
                response.send(error);
            }
            response.json(users);
        })
    }

    // GET 
    getUser(request: Request, response: Response) {
        User.findById(request.params.id, (error, user) => {
            if (error) {
                error.send(error);
            }
            response.json(user);
        })
    }

    // POST
    addUser(request: Request, response: Response) {
        let newUser = new User(request.body);

        newUser.save((error, user) => {
            if (error) {
                response.send(error);
            }
            response.json(user);
        });
    }

    // PUT
    updateUser(request: Request, response: Response) {
        User.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (error, updatedUser) => {
            if (error) {
                response.send(error);
            }
            response.json(updatedUser);
        });
    }

    // DELETE
    deleteUser(request: Request, response: Response){
        User.remove({ _id: request.params.contactId }, (error, deletedUser) => {
            if(error){
                response.send(error);
            }
            response.json(deletedUser);
        });
    }
}