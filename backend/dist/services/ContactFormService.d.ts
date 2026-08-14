import type { ContactFormData } from '../types/form.js';
export declare class ContactFormService {
    /**
     * Save contact form submission to database
     */
    static saveSubmission(data: ContactFormData): Promise<{
        id: number;
        success: boolean;
    }>;
    /**
     * Get all submissions
     */
    static getAllSubmissions(): Promise<ContactFormData[]>;
    /**
     * Get submission by ID
     */
    static getSubmissionById(id: number): Promise<ContactFormData | null>;
    /**
     * Delete submission
     */
    static deleteSubmission(id: number): Promise<boolean>;
}
//# sourceMappingURL=ContactFormService.d.ts.map