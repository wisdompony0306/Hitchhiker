import * as Koa from 'koa';
import Middleware from './middlewares/middleware';
import { Log } from './utils/log';
import { ScheduleProcessManager } from './run_engine/schedule_process_manager';
import 'reflect-metadata';
import { WebSocketService } from './services/web_socket_service';

let app = new Koa();

Log.init();

ScheduleProcessManager.instance.init();

app.use(Middleware(app));

const server = app.listen(8080);

new WebSocketService(server).start();