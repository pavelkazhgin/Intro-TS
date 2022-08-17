 import {Router} from 'express';
  const router = Router();

import {getBids, getBindById, createBind, deleteBindById, updateBindById } from '../controllers/index.controller'

  router.get('/bids', getBids);
  router.get('/bid/:id', getBindById);
  router.post('/newBid', createBind);
  router.put('/bid/:id', updateBindById);
  router.delete('/bid/:id', deleteBindById);
 

  export default router; 
 