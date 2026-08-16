export function validateRegistration(body: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!body || typeof body !== 'object') {
    errors.push('invalid payload');
    return { valid: false, errors };
  }

  const firstName = typeof body.firstName === 'string' ? body.firstName : body.first_name;
  const lastName = typeof body.lastName === 'string' ? body.lastName : body.last_name;
  const email = typeof body.email === 'string' ? body.email : '';
  const comments = typeof body.comments === 'string' ? body.comments : body.comments_questions;
  const specialRequests = typeof body.specialRequests === 'string' ? body.specialRequests : body.special_requests;

  if (!firstName || typeof firstName !== 'string' || !firstName.trim()) {
    errors.push('first_name is required');
  }
  if (!lastName || typeof lastName !== 'string' || !lastName.trim()) {
    errors.push('last_name is required');
  }
  if (!email || typeof email !== 'string' || !email.trim()) {
    errors.push('email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errors.push('email is invalid');
    }
  }

  if (typeof comments === 'string' && comments.trim().length > 500) {
    errors.push('comments_questions must not exceed 500 characters');
  }

  if (typeof specialRequests === 'string' && specialRequests.trim().length > 500) {
    errors.push('special_requests must not exceed 500 characters');
  }

  return { valid: errors.length === 0, errors };
}
