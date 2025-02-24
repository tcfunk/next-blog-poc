import { disableDraftMode } from "next-drupal/draft"
import type { NextRequest } from "next/server"

// export const dynamic = 'force-static'
// export const revalidate = 0

export async function GET(_: NextRequest) {
  return await disableDraftMode()
}
