import { Request, Response } from 'express';
import { PlayTypes } from '../models/PlayType.model';

export class PlayTypeService {
    // GET ALL
    getPlayTypes(request: Request, response: Response) {
        PlayTypes.find({}, (error, playTypes) => {
            if (error) {
                response.send(error);
            }
            response.json(playTypes);
        });
    };

    // GET 
    getPlayType(request: Request, response: Response) {
        PlayTypes.findById(request.params.id, (error, playType) => {
            if (error) {
                response.send(error);
            }
            response.json(playType);
        });
    };

    // POST
    addPlayType(request: Request, response: Response) {
        const newJob = new PlayTypes(request.body);

        newJob.save((error, playType) => {
            if (error) {
                response.send(error);
            }
            response.json(playType);
        });
    };

    // PUT
    updatePlayType(request: Request, response: Response) {
        PlayTypes.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (error, updatedPlayType) => {
            if (error) {
                response.send(error);
            }
            response.json(updatedPlayType);
        });
    };

    // DELETE
    deletePlayType(request: Request, response: Response) {
        PlayTypes.deleteOne({ _id: request.params.id }, (error, deletedPlayType) => {
            if (error) {
                response.send(error);
            }
            response.json(deletedPlayType);
        });
    };
}
