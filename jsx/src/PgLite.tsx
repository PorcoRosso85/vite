import { PGlite } from "@electric-sql/pglite"
import { live } from "@electric-sql/pglite/live"
import { PGliteProvider } from "@electric-sql/pglite-react"
import { usePGlite } from "@electric-sql/pglite-react"


const db = await PGlite.create({
  extensions: { live }
})

db.exec(`
CREATE TABLE IF NOT EXISTS todo (
  id SERIAL PRIMARY KEY,
  task TEXT,
  done BOOLEAN DEFAULT false
);
`);

const PgLite = () => {
  return (
    <PGliteProvider db={db}>
        <PgLiteChild />
    </PGliteProvider>
  )
}
const PgLiteChild = () => {
  const db = usePGlite()

  const insertItem = () => { // Fixed arrow function syntax
    const queries = [
        "INSERT INTO todo (task, done) VALUES ('Install PGlite from NPM', true);",
        "INSERT INTO todo (task, done) VALUES ('Load PGlite', true);",
        "INSERT INTO todo (task, done) VALUES ('Create a table', true);",
        "INSERT INTO todo (task, done) VALUES ('Insert some data', true);",
        "INSERT INTO todo (task) VALUES ('Update a task');"
    ]
    queries.forEach(query => {
        db.query(query)
    })
  }
  const selectItems = async () => {
    const selected = await db.query("SELECT * FROM todo;")
    console.log("selected", selected)
  }
  const dropAllItems = () => {
    db.query("DELETE FROM todo;") 
  }

  return (
    <>
      <button onClick={insertItem}>Insert Item</button> {/* Fix end of tag */}
      <br />
      <button onClick={selectItems}>Select Items</button>
      <br />
      <button onClick={dropAllItems}>Drop All Items</button>
    </>
  )
}

export { PgLite as PgLite }