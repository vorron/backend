import { Container } from 'inversify';
import { FileOperationsImpl } from './implementations/FileOperations.js';
import { FileOperations } from './share/IFileOperations.shr.js';
import BackendLogger from './front-back/IBackendLogger.js';
import backendLogger from './front-back/BackendLogger.js';

export const container = new Container();

export default function startDI() {
  container.bind<FileOperations>('FileOperations').to(FileOperationsImpl).inSingletonScope();
  container.bind<BackendLogger>('BackendLogger').toConstantValue(backendLogger);
}
