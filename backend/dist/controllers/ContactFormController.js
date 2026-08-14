import { ContactFormModel } from '../models/ContactForm.js';
import { ContactFormService } from '../services/ContactFormService.js';
export class ContactFormController {
    /**
     * Handle form submission
     */
    async submitForm(request, reply) {
        try {
            const formData = request.body;
            // Create model instance
            const contactForm = new ContactFormModel(formData);
            // Validate data
            const validationErrors = contactForm.validate();
            if (validationErrors.length > 0) {
                const response = {
                    success: false,
                    message: 'Validation failed',
                    error: JSON.stringify(validationErrors),
                };
                reply.status(400).send(response);
                return;
            }
            // Sanitize data
            const sanitizedData = contactForm.sanitize();
            // Save to database
            const result = await ContactFormService.saveSubmission(sanitizedData);
            console.log('Form submitted and saved with ID:', result.id);
            const response = {
                success: true,
                message: 'Form submitted successfully',
                data: sanitizedData,
            };
            reply.status(200).send(response);
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            const response = {
                success: false,
                message: 'Internal server error',
                error: errorMessage,
            };
            reply.status(500).send(response);
        }
    }
    /**
     * Get form schema (for frontend)
     */
    async getFormSchema(request, reply) {
        const schema = {
            fields: [
                {
                    name: 'firstName',
                    label: 'First Name',
                    type: 'text',
                    required: true,
                    placeholder: 'Enter your first name',
                },
                {
                    name: 'lastName',
                    label: 'Last Name',
                    type: 'text',
                    required: true,
                    placeholder: 'Enter your last name',
                },
                {
                    name: 'email',
                    label: 'Email',
                    type: 'email',
                    required: true,
                    placeholder: 'Enter your email',
                },
                {
                    name: 'message',
                    label: 'Message',
                    type: 'textarea',
                    required: true,
                    placeholder: 'Enter your message (minimum 10 characters)',
                    minLength: 10,
                },
            ],
        };
        reply.status(200).send(schema);
    }
}
//# sourceMappingURL=ContactFormController.js.map