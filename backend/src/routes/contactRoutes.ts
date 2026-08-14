import type { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { ContactFormController } from '../controllers/ContactFormController.js';
import type { ContactFormData } from '../types/form.js';

export async function contactRoutes(fastify: FastifyInstance) {
  const controller = new ContactFormController();

  // POST /api/contact - Submit contact form
  fastify.post<{ Body: ContactFormData }>('/api/contact', async (request: FastifyRequest<any>, reply: FastifyReply) => {
    await controller.submitForm(request as FastifyRequest<{ Body: ContactFormData }>, reply);
  });

  // GET /api/contact/schema - Get form schema
  fastify.get('/api/contact/schema', async (request: FastifyRequest, reply: FastifyReply) => {
    await controller.getFormSchema(request, reply);
  });
}
