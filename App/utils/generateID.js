const MIN = 1
const MAX = 9999999
export function generateRandomID() {
  return (Math.floor(Math.random() * (MAX - MIN + 1)) + MIN).toString()
}
