import { Router, Request, Response, NextFunction } from 'express';
import { DataCenterService } from '../services/DataCenter.service';

export class DataCenterRouter {
    private router: Router = Router();
    private dataCenterService: DataCenterService = new DataCenterService();

    getRouter(): Router {
        this.router.get('/', (request: Request, response: Response) => this.dataCenterService.getDataCenters(request, response));
        this.router.get('/:id', (request: Request, response: Response) => this.dataCenterService.getDataCenter(request, response));
        this.router.post('/', (request: Request, response: Response) => this.dataCenterService.addDataCenter(request, response));
        this.router.put('/:id', (request: Request, response: Response) => this.dataCenterService.updateDataCenter(request, response));
        this.router.delete('/:id', (request: Request, response: Response) => this.dataCenterService.deleteDataCenter(request, response));

        return this.router;
    }
}
