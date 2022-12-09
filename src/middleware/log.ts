import { NextFunction, Request, Response } from "express"

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers;
    const userAgent = headers["user-agent"]
    console.log('Usuario que realizó la petición:', userAgent)
    next()

}

export { logMiddleware }