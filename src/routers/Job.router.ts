import { Router, Request, Response, NextFunction } from 'express';
import { JobService } from '../services/Job.service';

export class JobRouter {
    private router: Router = Router();
    private jobService: JobService = new JobService();

    getRouter(): Router {
        this.router.get('/', (request: Request, response: Response) => this.jobService.getJobs(request, response));
        this.router.get('/:id', (request: Request, response: Response) => this.jobService.getJob(request, response));
        this.router.post('/', (request: Request, response: Response) => this.jobService.addJob(request, response));
        this.router.put('/:id', (request: Request, response: Response) => this.jobService.updateJob(request, response));
        this.router.delete('/:id', (request: Request, response: Response) => this.jobService.deleteJob(request, response));

        return this.router;
    }
}
