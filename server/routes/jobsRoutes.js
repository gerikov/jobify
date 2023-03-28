import express from 'express';
const router = express.Router();

import {
  updateJob,
  getAllJobs,
  deleteJob,
  showStats,
  createJob,
} from '../controllers/jobsController.js';

router.route('').post(createJob).get(getAllJobs);
// stats have to be above the ID route
router.route('/stats').get(showStats);
router.route('/:id').delete(deleteJob).patch(updateJob);

export default router;
