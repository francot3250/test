const express = require('express')

const FriendList = require('./models/FriendList')

const app = express()
const port = 8080


  app.get('/list', (req, res) => {
      res.json(FriendList).status(201);
      
  });
  app.post('/list', function(req, res) {
    res.send(FriendList);
  })
FriendListNew = FriendList.push({id : 6,
    Name : "James Carter",
    Age : 27,
    Phone : "080474576766",},)

app.listen(port, () => {
  console.log(`listening at http://127.0.0.1:${port}`)
});
