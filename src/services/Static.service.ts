import { Request, Response } from 'express';
import { Statics } from '../models/Static.model';

export class StaticService {
    // GET ALL
    getStatics(request: Request, response: Response) {
        Statics.find({}, (error, statics) => {
            if (error) {
                response.send(error);
            }
            response.json(statics);
        });
    };

    // GET 
    getStatic(request: Request, response: Response) {
        Statics.findById(request.params.id, (error, result) => {
            if (error) {
                response.send(error);
            }
            response.json(result);
        });
    };

    // POST
    addStatic(request: Request, response: Response) {
        const newStatic = new Statics(request.body);

        newStatic.save((error, result) => {
            if (error) {
                response.send(error);
            }
            response.json(result);
        });
    };

    // PUT
    updateStatic(request: Request, response: Response) {
        Statics.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (error, updatedStatic) => {
            if (error) {
                response.send(error);
            }
            response.json(updatedStatic);
        });
    };

    // DELETE
    deleteStatic(request: Request, response: Response) {
        Statics.deleteOne({ _id: request.params.id }, (error, deletedStatic) => {
            if (error) {
                response.send(error);
            }
            response.json(deletedStatic);
        });
    };
}
