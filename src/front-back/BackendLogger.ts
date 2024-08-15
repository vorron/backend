import BackendLogger from './IBackendLogger';

let accumulator: string | undefined = undefined;

const backendLogger: BackendLogger = {
  log: (value: string) => {
    if (accumulator) accumulator += '\n' + value;
    else accumulator = 'backend log >>>\n' + value;
  },
  get: () => {
    const val = accumulator;
    accumulator = undefined;
    return val;
  },
};

export default backendLogger;
