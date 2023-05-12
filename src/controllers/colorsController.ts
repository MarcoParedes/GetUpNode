import { Request, Response } from 'express';
import * as data from "../lib/Data.json";

class ColorsController {
    public getColors(req: Request, res: Response) {
        const { type } = req.query;
        setTimeout(() => {
            if (type == '-1') return res.send(data.arrayColores);
    
            const primario = type == '1';
            const colors = data.arrayColores.filter(x => x.tipoPrimario == primario);
            res.send(colors);    
        }, 5000);
    }
}

export const colorsController = new ColorsController();
 