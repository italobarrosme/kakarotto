'use server'

import { list } from '@vercel/blob'

export const getFindFile = async (file: string) => {
  try {
    const response = await list()

    if (!response.blobs) {
      throw new Error('No items found')
    }

    const fileFound = response.blobs.find((blob) => blob.pathname === file)

    if (!fileFound) {
      throw new Error('File not found')
    }

    return fileFound.url
  } catch (error) {
    throw new Error(String(error))
  }
}
