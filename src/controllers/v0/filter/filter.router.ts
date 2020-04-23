import { Router, Request, Response } from 'express';
import * as url from "url";

import {filterImageFromURL, deleteLocalFiles} from '../../../util/util';

const router: Router = Router();

// @TODO1 IMPLEMENT A RESTFUL ENDPOINT
// GET /filteredimage?image_url={{URL}}
// endpoint to filter an image from a public url.
// IT SHOULD
//    1
//    1. validate the image_url query
//    2. call filterImageFromURL(image_url) to filter the image
//    3. send the resulting file in the response
//    4. deletes any files on the server on finish of the response
// QUERY PARAMATERS
//    image_url: URL of a publicly accessible image
// RETURNS
//   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]
router.get('/image',
	async (req: Request, res: Response)  => {
		const q = url.parse(req.url, true).query;
		const imageURL = q['image_url'] as string;

		if (!imageURL) {
			return res.send(422).send('image_url query param is required')
		}

		try {
			const path = await filterImageFromURL(imageURL);
			res.sendFile(path, (err: Error) => {
				if (err) {
					res.send(err.message)
				}
				deleteLocalFiles([path]);
			});
		} catch(e){
			return res.send(500).send(e.message)
		}
	});
//! END @TODO1


export const FilterRouter: Router = router;
