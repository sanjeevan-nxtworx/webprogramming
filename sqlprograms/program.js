const sql = require("msnodesqlv8");

const connectionString =
  "server=LAPTOP-N75P5R90;Database=gravity_books;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}";
const query = "SELECT * FROM book";

sql.query(connectionString, query, (err, rows) => {
  if (err) console.log(err);
  console.log(rows);
});
