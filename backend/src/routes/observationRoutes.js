const express = require("express");
const db = require("../mySql");

const observationsRouter = express.Router();
// const sql = "SELECT * FROM events WHERE care_recipient_id = 'df50cac5-293c-490d-a06c-ee26796f850d' AND event_type = 'mood_observation' ORDER BY timestamp DESC LIMIT 10";

observationsRouter.get("/", (req, res) => {
  try {
    const sql =
      "SELECT * FROM events WHERE care_recipient_id = 'df50cac5-293c-490d-a06c-ee26796f850d' ORDER BY timestamp DESC LIMIT 50";
    db.query(sql, async (err, result) => {
      if (err) throw err;
      let payload = await result;
      payload = payload.map((x) => JSON.parse(x.payload));
      res.status(200).send(payload);
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
// const sql = `SELECT * FROM events WHERE care_recipient_id = '${client}' AND event_type = '${eventType}' AND timestamp BETWEEN ${fromDate} AND ${toDate} ORDER BY timestamp DESC LIMIT 100`

observationsRouter.get("/:settings", (req, res) => {
  try {
    const { client, eventType, fromDate, toDate } = req.query;
    const sql =
      eventType !== "all"
        ? `SELECT * FROM events WHERE care_recipient_id = '${client}' AND event_type = '${eventType}' AND timestamp BETWEEN '${fromDate}' AND '${toDate}' ORDER BY timestamp DESC LIMIT 200`
        : `SELECT * FROM events WHERE care_recipient_id = '${client}' AND timestamp BETWEEN '${fromDate}' AND '${toDate}' ORDER BY timestamp DESC LIMIT 200`;
    db.query(sql, async (err, result) => {
      if (err) throw err;
      let payload = await result;
      payload = payload.map((x) => JSON.parse(x.payload));
      res.status(200).send(payload);
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = observationsRouter;
