import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const dbFilePath = 'src/db.json';

app.get('/ping', (req: Request, res: Response) => {
    res.send('true');
});

app.post('/submit', (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).send('All fields are required');
    }

    fs.readFile(dbFilePath, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading database file');
        }

        const db = JSON.parse(data.toString());
        const newSubmission = {
            name,
            email,
            phone,
            github_link,
            stopwatch_time,
        };
        db.submissions.push(newSubmission);

        fs.writeFile(dbFilePath, JSON.stringify(db, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing to database file');
            }
            res.status(201).send('Submission added successfully');
        });
    });
});

app.get('/read', (req: Request, res: Response) => {
    const { index } = req.query;
    if (index === undefined) {
        return res.status(400).send('Index query parameter is required');
    }

    fs.readFile(dbFilePath, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading database file');
        }

        const db = JSON.parse(data.toString());
        const idx = parseInt(index as string, 10);
        if (idx < 0 || idx >= db.submissions.length) {
            return res.status(404).send('No submission found at the given index');
        }

        res.status(200).json(db.submissions[idx]);
    });
});

app.get('/total', (req: Request, res: Response) => {
    fs.readFile(dbFilePath, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading database file');
        }

        const db = JSON.parse(data.toString());
        res.status(200).send(db.submissions.length.toString());
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
