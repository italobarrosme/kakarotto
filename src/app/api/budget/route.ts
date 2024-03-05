import { getCustomLog } from '@/utils/logs/logs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { payload } = await request.json()

  if (!payload.email) {
    getCustomLog({
      log: 'Email is required',
      type: 'error',
      statusCode: 400,
    })
  }

  getCustomLog({
    log: `Email is valid: ${payload.email}`,
    type: 'success',
    statusCode: 200,
  })

  return NextResponse.json({
    data: {
      status: 200,
    },
  })
}
