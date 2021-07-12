const express = require('express')
const app = express();


const FriendList = require('./models/FriendList');

app.use(express.json());


const port = 8080


  app.get('/list', (req, res) => {
      res.json(FriendList).status(201);
      
  });

  app.post('/list', function(req, res) {


      FriendListNew = FriendList.push(req.body)
    res.send(FriendList).status(201);
  })


app.listen(port, () => {
  console.log(`listening at http://127.0.0.1:${port}`)
});
