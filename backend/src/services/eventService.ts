import * as model from '../models/eventModel.js';

export async function createRegistration(payload: any) {
  const data = {
    first_name: typeof payload.firstName === 'string' ? payload.firstName : payload.first_name,
    last_name: typeof payload.lastName === 'string' ? payload.lastName : payload.last_name,
    email: typeof payload.email === 'string' ? payload.email.trim() : '',
    comments_questions: typeof payload.comments === 'string' ? payload.comments : payload.comments_questions,
    special_requests: typeof payload.specialRequests === 'string' ? payload.specialRequests : payload.special_requests,
  };

  const id = await model.createRegistration(data as any);
  return id;
}

export async function listRegistrations(opts: { limit?: number; offset?: number } = {}) {
  return await model.getRegistrations(opts);
}
