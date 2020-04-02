export function encode(data) {
  return Buffer.from(data).toString("base64")
}

export function decode(data) {
  return Buffer.from(data, "base64").toString("ascii")
}
