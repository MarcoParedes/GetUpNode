import express from 'express';
import Routes from './routes';

const app = express();

app.set('port', 3500);

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/v1/colors', Routes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
