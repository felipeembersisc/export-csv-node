import { sql } from './db/client.ts'

const query = sql`
  SELECT id, name
  FROM products
  WHERE price_in_cents >= 1000
`

const cursor = query.cursor(10)

for await (const rows of cursor) {
  console.log(rows)
  break
}

await sql.end()