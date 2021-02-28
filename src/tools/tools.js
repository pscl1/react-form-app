export const request = async ({ body, url, method = 'GET'}) => {
  const requestOptions = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
  const response = await fetch(url, requestOptions)
  const result = await response.json()
  if (response.status >= 400) throw new Error(result.message)
  return result
}