import { FileOperations } from '../share/IFileOperations.shr';
import fs from 'fs/promises';
import { injectable } from 'inversify';
import os from 'os';
import path from 'path';

@injectable()
export class FileOperationsImpl implements FileOperations {
  homedir() {
    return os.homedir();
  }
  join(...paths: string[]) {
    return path.join(...paths);
  }
  async writeFile(file: string, data: string) {
    return await fs.writeFile(file, data, 'utf-8');
  }
  async readFile(filePath: string): Promise<string> {
    return fs.readFile(filePath, 'utf-8');
  }
}
