import express, { Application, Request, Response, NextFunction } from 'express';
import { addListener } from 'cluster';
import GenerateScale from "./controller/generateScale";
 
const app: Application = express();
const stdin = process.openStdin();
var scaleInput: String;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log("Welcome to the Scale Generator!");
    res.send('Generate Scale');
    const generateScale: GenerateScale = new GenerateScale();
    generateScale.GenerateMajorScale("c").printScale()
});

app.listen(5000, () => console.log("Server running on port 5000"));
