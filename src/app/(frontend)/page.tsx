import { headers as getHeaders } from "next/headers.js"
import Image from "next/image"
import { getPayload } from "payload"
import React from "react"
import { fileURLToPath } from "url"

import config from "@/payload.config"
import "./styles.css"
import { payload } from "@/lib/payload"

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="home">
      
    </div>
  )
}
