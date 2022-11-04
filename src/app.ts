import express, { Application } from 'express';
import morgan from 'morgan';

//Router
import IndexRoute from './routes/index.routes';
import PostRoute from './routes/post.routes';

export class App {
    private app: Application;
    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middleware();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(IndexRoute);
        this.app.use('/posts', PostRoute);
    }

    async listen() {
       this.app.listen(this.app.get('port'));
       console.log('Server on port', this.app.get('port'));
    }
}