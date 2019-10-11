import { Request, Response } from 'express';
import { IGCharacters } from '../models/IGCharacter.model';

export class IGCharacterService {
    // GET ALL
    getIGCharacters(request: Request, response: Response) {
        IGCharacters.find({}, (error, igCharacters) => {
            if (error) {
                response.send(error);
            }
            response.json(igCharacters);
        });
    };

    // GET 
    getIGCharacter(request: Request, response: Response) {
        IGCharacters.findById(request.params.id, (error, igCharacter) => {
            if (error) {
                response.send(error);
            }
            response.json(igCharacter);
        });
    };

    // POST
    addIGCharacter(request: Request, response: Response) {
        const newIGCharacter = new IGCharacters(request.body);

        newIGCharacter.save((error, igCharacter) => {
            if (error) {
                response.send(error);
            }
            response.json(igCharacter);
        });
    };

    // PUT
    updateIGCharacter(request: Request, response: Response) {
        IGCharacters.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (error, updatedIGCharacter) => {
            if (error) {
                response.send(error);
            }
            response.json(updatedIGCharacter);
        });
    };

    // DELETE
    deleteServer(request: Request, response: Response) {
        IGCharacters.deleteOne({ _id: request.params.id }, (error, deletedIGCharacter) => {
            if (error) {
                response.send(error);
            }
            response.json(deletedIGCharacter);
        });
    };
}
