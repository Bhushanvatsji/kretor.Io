// API utilities and helpers

/**
 * Email validation helper
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Phone number validation helper
 */
export function validatePhone(phone) {
  if (!phone) return true; // Optional field
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/**
 * Format date helper
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Sanitize input helper
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 1000);
}

/**
 * Generate API response
 */
export function apiResponse(success = true, data = null, error = null, status = 200) {
  return {
    success,
    data,
    error,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Rate limiting helper (basic implementation)
 */
const requestCounts = new Map();

export function checkRateLimit(identifier, limit = 5, windowMs = 60000) {
  const now = Date.now();
  const windowStart = now - windowMs;

  if (!requestCounts.has(identifier)) {
    requestCounts.set(identifier, []);
  }

  const requests = requestCounts.get(identifier);
  const recentRequests = requests.filter(time => time > windowStart);

  if (recentRequests.length >= limit) {
    return false;
  }

  recentRequests.push(now);
  requestCounts.set(identifier, recentRequests);

  // Cleanup old entries
  if (requestCounts.size > 1000) {
    requestCounts.clear();
  }

  return true;
}

/**
 * Get client IP address
 */
export function getClientIp(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    'unknown'
  );
}

/**
 * Validate required fields
 */
export function validateRequiredFields(data, requiredFields) {
  const missing = [];
  for (const field of requiredFields) {
    if (!data[field] || (typeof data[field] === 'string' && !data[field].trim())) {
      missing.push(field);
    }
  }
  return missing;
}
