export default function(str: string) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .slice(0, 200)
}
