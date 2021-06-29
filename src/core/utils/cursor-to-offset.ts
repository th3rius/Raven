export function cursorToOffset(cursor: string) {
  return Buffer.from(cursor, 'base64').toString().split(':')[1];
}
