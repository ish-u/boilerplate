import { Express, Request, Response } from "express";

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      Working: "Not Fine",
    });
  });

  app.get("/msg/:hello", async (req: Request, res: Response) => {
    res.status(200).json({
      hello: req.params.hello,
    });
  });
}

export default routes;
