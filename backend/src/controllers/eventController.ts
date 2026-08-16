import type { Request, Response } from 'express';
import * as service from '../services/eventService.js';
import { validateRegistration } from '../validators/eventValidator.js';

export async function create(req: Request, res: Response) {
  try {
    const { valid, errors } = validateRegistration(req.body);
    if (!valid) return res.status(400).json({ errors });

    const id = await service.createRegistration(req.body);
    return res.status(201).json({ id, message: 'Registered' });
  } catch (err) {
    console.error('Create registration error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export async function list(req: Request, res: Response) {
  try {
    const limit = req.query.limit ? Number(req.query.limit) : 100;
    const offset = req.query.offset ? Number(req.query.offset) : 0;
    const rows = await service.listRegistrations({ limit, offset });
    return res.json(rows);
  } catch (err) {
    console.error('List registrations error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
