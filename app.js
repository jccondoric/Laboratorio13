const express = require('express');
const bodyParser = require('body-parser');

const medicoController = require('./controllers/medicoController');
const sequelize = require('./config/database');

const app = express();



app.use(bodyParser.json());

app.post('/medicos', medicoController.addMedico);
app.get('/medicos', medicoController.getMedicos);
app.get('/medicos/:id', medicoController.getMedicoById);
app.put('/medicos/:id', medicoController.updateMedico);
app.delete('/medicos/:id', medicoController.deleteMedico);

sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Unable to synchronize the database:', err);
  });

module.exports = app;