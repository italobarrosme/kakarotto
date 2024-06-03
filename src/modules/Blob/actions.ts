'use server'

import { getCustomLog } from '@/utils/logs/logs'
import { list } from '@vercel/blob'

// Cache em memória para armazenar URLs de arquivos
const cache = new Map<string, string>()

export const getFindFile = async (file: string) => {
  if (cache.has(file)) {
    const cachedUrl = cache.get(file)
    getCustomLog({
      log: `Cache hit: ${cachedUrl}`,
      statusCode: 200,
      type: 'success',
    })
    return cachedUrl
  }

  try {
    const response = await list()

    if (!response.blobs) {
      throw new Error('No items found')
    }

    const fileFound = response.blobs.find((blob) => blob.pathname === file)

    if (!fileFound) {
      throw new Error('File not found')
    }

    // Armazenar o resultado no cache
    cache.set(file, fileFound.url)

    getCustomLog({
      log: `File found: ${fileFound.url}`,
      statusCode: 200,
      type: 'success',
    })

    return fileFound.url
  } catch (error: unknown | any) {
    getCustomLog({
      log: `Error: ${error}`,
      statusCode: error.statusCode || 500,
      type: 'error',
    })

    throw new Error(String(error))
  }
}
