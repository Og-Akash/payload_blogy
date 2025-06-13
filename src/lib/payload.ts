import { getPayload } from "payload"
import configPayload from "@/payload.config"

export const payload = await getPayload({
  config: configPayload,
})

