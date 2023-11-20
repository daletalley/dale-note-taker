const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3003;
const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes');
const path = require('path');
const uuid  = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Import and use your route files (apiRoutes.js and htmlRoutes.js).
app.use('/api', apiRoutes);




app.get('/notes', (req, res)=>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});