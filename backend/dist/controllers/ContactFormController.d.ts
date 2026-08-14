import type { FastifyRequest, FastifyReply } from 'fastify';
import type { ContactFormData } from '../types/form.js';
export declare class ContactFormController {
    /**
     * Handle form submission
     */
    submitForm(request: FastifyRequest<{
        Body: ContactFormData;
    }>, reply: FastifyReply): Promise<void>;
    /**
     * Get form schema (for frontend)
     */
    getFormSchema(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}
//# sourceMappingURL=ContactFormController.d.ts.map