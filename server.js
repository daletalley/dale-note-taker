const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); // 'public' should be at the root of your project.

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
