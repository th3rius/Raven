export function offsetToCursor(id: string) {
  return Buffer.from(`cursor:${String(id)}`).toString('base64');
}
