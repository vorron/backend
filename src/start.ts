/* eslint-disable no-console */
import 'reflect-metadata';
import { createServer } from 'node:http';
import { requestListener } from './requestListener.js';
import startDI from './resolveDI.js';

const server = createServer(requestListener);

startDI();

server.listen(3010, '0.0.0.0', () => {
  console.log('Сервер запущен');
});

server.on('close', () => {
  console.log('server close');
});
