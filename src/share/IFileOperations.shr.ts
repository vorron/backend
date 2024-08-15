export interface FileOperations {
  homedir: () => string
  join: (...paths: string[]) => string
  writeFile: (file: string, data: string) => Promise<void>
  readFile(filePath: string): Promise<string>
}
