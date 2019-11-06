import { Request, Response } from 'express';
import { Servers } from '../models/Server.model';

export class ServerService {
    // GET ALL
    getServers(request: Request, response: Response) {
        Servers.find({}, (error, servers) => {
            if (error) {
                response.send(error);
            }
            response.json(servers);
        });
    };

    // GET 
    getServer(request: Request, response: Response) {
        Servers.findById(request.params.id, (error, server) => {
            if (error) {
                response.send(error);
            }
            response.json(server);
        });
    };

    // POST
    addServer(request: Request, response: Response) {
        const newServer = new Servers(request.body);

        newServer.save((error, server) => {
            if (error) {
                response.send(error);
            }
            response.json(server);
        });
    };

    // PUT
    updateServer(request: Request, response: Response) {
        Servers.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (error, updatedServer) => {
            if (error) {
                response.send(error);
            }
            response.json(updatedServer);
        });
    };

    // DELETE
    deleteServer(request: Request, response: Response) {
        Servers.deleteOne({ _id: request.params.id }, (error, deletedServer) => {
            if (error) {
                response.send(error);
            }
            response.json(deletedServer);
        });
    };
}
