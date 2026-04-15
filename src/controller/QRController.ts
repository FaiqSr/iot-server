import { Request, Response } from "express";

export class QRController {
    public static scanQR(req: Request, res: Response){
        const qrData = req.params.qrData;
    }
}