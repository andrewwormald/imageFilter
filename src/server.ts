import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';

import { IndexRouter } from "./controllers/v0/index.router";

// main
(async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use('/api/v0/', IndexRouter);

  app.get('/', async (req: Request, res: Response) => {
	  res.send(`To use this service please use the
	  following URI /api/v0/filteredImage?image_url="your image url"`);
  });

  const port = process.env.PORT || 8082;
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
