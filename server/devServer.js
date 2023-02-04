const fs = require('fs');
const express = require('express')
const app = express()
const port = 9000
const monitoroRouter = require('./router')
const monitoroQueues = fs.readFileSync('./queues.json', 'utf8');

app.locals.MonitoroQueues = monitoroQueues
app.use('/',monitoroRouter)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})