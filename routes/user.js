const express = require('express');
const router = express.Router();
const client = require('../db.js')
client.connect();
router.get(
    '/',
    async (req, res) => {

        try {

            client.query('select * from "Users"', (err, result) => {

                if (!err) {
                    console.log(result.rows);
                    res.status(200).json(result.rows)
                } else {
                    res.status(200).json({ error: err.message })
                }
            })
        } catch (error) {
            res.status(200).send({ error: error.message })
        }

    }
);
module.exports = router;


