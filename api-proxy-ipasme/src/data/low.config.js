import low from "lowdb";
import FileAsync from "lowdb/adapters/FileAsync";

let db;

export async function createConnection() {
  const adapter = new FileAsync("db.json");
  db = await low(adapter);
  db.defaults({ Users: [], Roles: [] }).write();
}

export const getConnection = () => db;