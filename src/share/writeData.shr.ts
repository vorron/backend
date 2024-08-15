import type { FileOperations } from './IFileOperations.shr'
import { lib } from '@/front-back/lib'

export default async function writeData(content: string) {
  const fo = lib<FileOperations>('FileOperations')

  const homeDir = fo.homedir()

  const filePath = fo.join(homeDir, 'example.txt')

  try {
    await fo.writeFile(filePath, content)
    console.log(`File "${filePath}" has been successfully written.`)
  } catch (error) {
    console.error(`Error writing to file "${filePath}": ${(error as Error).message}`)
  }
}
