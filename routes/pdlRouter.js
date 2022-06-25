import express from 'express';
import { getPDLConnect, getPDLConnectIndex } from '../controllers/pdlController.js';

export const pdlRouter = express.Router();

pdlRouter.get('/', getPDLConnectIndex);