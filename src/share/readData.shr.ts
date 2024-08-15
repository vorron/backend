import type { FileOperations } from './IFileOperations.shr'
import { lib } from '@/front-back/lib'

export default async function readData() {
  const fo = lib<FileOperations>('FileOperations')
  const filePath = fo.join(fo.homedir(), 'example.txt')
  try {
    return await fo.readFile(filePath)
  } catch (error) {
    console.error(`Error writing to file "${filePath}": ${(error as Error).message}`)
    return `Error writing to file "${filePath}": ${(error as Error).message}`
  }
}
