import { Router, Request, Response } from 'express';
import { FilterRouter } from './filter/filter.router';

const router: Router = Router();

router.use('/', FilterRouter);

export const IndexRouter: Router = router;
