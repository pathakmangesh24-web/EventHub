export class ContactFormModel {
    data;
    constructor(data) {
        this.data = data;
    }
    /**
     * Validate form data
     */
    validate() {
        const errors = [];
        if (!this.data.firstName || this.data.firstName.trim() === '') {
            errors.push({ field: 'firstName', message: 'First Name is required' });
        }
        if (!this.data.lastName || this.data.lastName.trim() === '') {
            errors.push({ field: 'lastName', message: 'Last Name is required' });
        }
        if (!this.data.email || this.data.email.trim() === '') {
            errors.push({ field: 'email', message: 'Email is required' });
        }
        else if (!this.isValidEmail(this.data.email)) {
            errors.push({ field: 'email', message: 'Email format is invalid' });
        }
        if (!this.data.message || this.data.message.trim() === '') {
            errors.push({ field: 'message', message: 'Message is required' });
        }
        else if (this.data.message.length < 10) {
            errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
        }
        return errors;
    }
    /**
     * Validate email format
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    /**
     * Get form data
     */
    getData() {
        return this.data;
    }
    /**
     * Sanitize form data
     */
    sanitize() {
        return {
            firstName: this.data.firstName.trim(),
            lastName: this.data.lastName.trim(),
            email: this.data.email.trim().toLowerCase(),
            message: this.data.message.trim(),
        };
    }
}
//# sourceMappingURL=ContactForm.js.map