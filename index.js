const express = require("express");
const app = express();

const controller = require("./controller");
const router = express.Router();
const dbHelper = require("./db");

router.get("/data", async (req, res) => {
  const db = dbHelper.getDatabase();
  dbHelper
    .fetchCombinedStudentData(db)
    .then(rows => {
      console.log(rows.length);
      res.json({
        data: {
          ...controller.divideBySelfEval({ submissions: rows })
        }
      });
    })
    .catch(reason => {
      console.error(reason);
    })
    .then(() => dbHelper.closeDatabase(db));
});

app.use("/api", router);

app.listen(3001);
