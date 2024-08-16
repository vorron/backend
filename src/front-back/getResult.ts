import backendLogger from './BackendLogger';
import DataFromBack from './DataFromBack';
import DataFromFront from './DataFromFront';

const getResult = async (data: DataFromFront): Promise<DataFromBack> => {
  const method = (await import('../share/' + data.name + '.shr.js')).default;
  if (!method) throw new Error(`Back method with name ${data.name} not found`);
  try {
    const result = await method(...(data.args as unknown as Parameters<typeof method>));
    return { result, isOk: true, log: backendLogger.get() };
  } catch (err) {
    return {
      err: err instanceof Error ? err.message : (err as string),
      isOk: false,
      log: backendLogger.get(),
    };
  }
};

export default getResult;
