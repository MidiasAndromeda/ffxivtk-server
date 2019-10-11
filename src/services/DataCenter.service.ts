import { Request, Response } from 'express';
import { DataCenters } from '../models/DataCenter.model';

export class DataCenterService {
    // GET ALL
    getDataCenters(request: Request, response: Response) {
        DataCenters.find({}, (error, dataCenters) => {
            if (error) {
                response.send(error);
            }
            response.json(dataCenters);
        });
    };

    // GET 
    getDataCenter(request: Request, response: Response) {
        DataCenters.findById(request.params.id, (error, dataCenter) => {
            if (error) {
                response.send(error);
            }
            response.json(dataCenter);
        });
    };

    // POST
    addDataCenter(request: Request, response: Response) {
        const newDataCenter = new DataCenters(request.body);

        newDataCenter.save((error, user) => {
            if (error) {
                response.send(error);
            }
            response.json(user);
        });
    };

    // PUT
    updateDataCenter(request: Request, response: Response) {
        DataCenters.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (error, updatedDataCenter) => {
            if (error) {
                response.send(error);
            }
            response.json(updatedDataCenter);
        });
    };

    // DELETE
    deleteDataCenter(request: Request, response: Response) {
        DataCenters.deleteOne({ _id: request.params.id }, (error, deletedDataCenter) => {
            if (error) {
                response.send(error);
            }
            response.json(deletedDataCenter);
        });
    };
}
