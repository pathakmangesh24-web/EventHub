import { ContactFormController } from '../controllers/ContactFormController.js';
export async function contactRoutes(fastify) {
    const controller = new ContactFormController();
    // POST /api/contact - Submit contact form
    fastify.post('/api/contact', async (request, reply) => {
        await controller.submitForm(request, reply);
    });
    // GET /api/contact/schema - Get form schema
    fastify.get('/api/contact/schema', async (request, reply) => {
        await controller.getFormSchema(request, reply);
    });
}
//# sourceMappingURL=contactRoutes.js.map