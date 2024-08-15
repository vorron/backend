import { IncomingMessage, ServerResponse } from 'http';
import getResult from './front-back/getResult.js';

const setResponse = (response: ServerResponse, value: any) => {
  response.setHeader('content-type', 'text/plain;charset=utf8');
  response.writeHead(200, 'OK');
  response.write(JSON.stringify(value ?? ''));
  response.end();
};

const getData = async (request: IncomingMessage) => {
  const buffers = [];
  for await (const chunk of request) buffers.push(chunk);
  return JSON.parse(Buffer.concat(buffers).toString());
};

const cors = (response: ServerResponse) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Request-Method', '*');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
};

export const requestListener = async (request: IncomingMessage, response: ServerResponse) => {
  cors(response);

  const url = request.url;
  if (!url) throw new Error('request.url is undefined!');

  if (url.startsWith('/api')) {
    response.writeHead(200);
    response.end('Hy from back!');
    return;
  }

  if (request.method === 'OPTIONS') {
    response.writeHead(200);
    response.end();
    return;
  }

  if (url === '/favicon.ico') {
    response.writeHead(200);
    response.end();
    return;
  }

  const data = await getData(request);

  const result = await getResult(data);

  setResponse(response, result);
};
