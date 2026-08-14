import type { ContactFormData, ValidationError } from '../types/form.js';
export declare class ContactFormModel {
    private data;
    constructor(data: ContactFormData);
    /**
     * Validate form data
     */
    validate(): ValidationError[];
    /**
     * Validate email format
     */
    private isValidEmail;
    /**
     * Get form data
     */
    getData(): ContactFormData;
    /**
     * Sanitize form data
     */
    sanitize(): ContactFormData;
}
//# sourceMappingURL=ContactForm.d.ts.map