
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});
const handle = app.getRequestHandler();

const path = require('path');

app.prepare()
    .then(() => {
        const server = express();

        server.get('/api/users', (req, res) => {
          const users = require(path.join(__dirname, 'data', 'users.json'));
          res.end(JSON.stringify(users));
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, () => {
            console.log('ready to fuck');
        })
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
