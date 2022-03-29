export const getMsgFromCatch = (err: any): string => {
  const message =
    typeof err === 'string' ? err : err instanceof Error ? err.message : 'UnknownError'
  return message
}
