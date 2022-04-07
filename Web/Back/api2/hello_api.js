//  const express = require('express');

import express, {response} from 'express';

const app = express();
const port = 3000;

app.get('/api/hello', (req, res) =>
{
    const query = req.query;
    console.log(query);
    res.send(`Hello ${query.name} ${query.surname} from api`);
});

app.listen(port, () =>
{
    console.log(`Server is running on port ${port}`);
})