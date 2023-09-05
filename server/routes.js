import express from 'express'
import mysql from 'mysql'

const router = express.Router()

// DB CONNECTION
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'waiting-list-db',
})

router.get('/', (req, res) => {
  res.send('In the name of Allah the Merciful')
})

// Get Clients
router.get('/clients', (req, res) => {
  const queryDB = 'SELECT * FROM clients'
  db.query(queryDB, (err, data) => {
    if (err) {
      console.log(err)
      return res.json(err)
    }
    return res.json(data)
  })
})

// Add Client
router.post('/clients', (req, res) => {
  const queryDB =
    'INSERT INTO clients(`clientname`, `clientid`, `priority`, `created_at`) VALUES (?)'

  const values = [
    req.body.clientname,
    req.body.clientid,
    req.body.priority,
    req.body.created_at,
  ]

  db.query(queryDB, [values], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
})

// Update Client
router.put('/clients/:clientid', (req, res) => {
  const clientId = req.params.clientid
  const queryDB = 'UPDATE clients SET `clientname`= ? WHERE clientid = ?'

  const values = [req.body.clientname]

  db.query(queryDB, [...values, clientId], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
})

// Delete Client
router.delete('/clients/:id', (req, res) => {
  const clientId = req.params.id
  const queryDB = ' DELETE FROM clients WHERE id = ? '

  db.query(queryDB, [clientId], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
})

export default router
