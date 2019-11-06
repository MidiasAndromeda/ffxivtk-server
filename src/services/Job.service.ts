import { Request, Response } from 'express';
import { Jobs } from '../models/Job.model';

export class JobService {
    // GET ALL
    getJobs(request: Request, response: Response) {
        Jobs.find({}, (error, jobs) => {
            if (error) {
                response.send(error);
            }
            response.json(jobs);
        });
    };

    // GET 
    getJob(request: Request, response: Response) {
        Jobs.findById(request.params.id, (error, job) => {
            if (error) {
                response.send(error);
            }
            response.json(job);
        });
    };

    // POST
    addJob(request: Request, response: Response) {
        const newJob = new Jobs(request.body);

        newJob.save((error, job) => {
            if (error) {
                response.send(error);
            }
            response.json(job);
        });
    };

    // PUT
    updateJob(request: Request, response: Response) {
        Jobs.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (error, updatedJob) => {
            if (error) {
                response.send(error);
            }
            response.json(updatedJob);
        });
    };

    // DELETE
    deleteJob(request: Request, response: Response) {
        Jobs.deleteOne({ _id: request.params.id }, (error, deletedJob) => {
            if (error) {
                response.send(error);
            }
            response.json(deletedJob);
        });
    };
}
