const EMAILJS_API_URL = 'https://api.emailjs.com/api/v1.0/email/send';

const requireEnv = (key) => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Missing EmailJS env var: ${key}`);
  }
  return value;
};

export const sendEmailJsForm = async ({ templateId, templateParams }) => {
  const serviceId = requireEnv('VITE_EMAILJS_SERVICE_ID');
  const publicKey = requireEnv('VITE_EMAILJS_PUBLIC_KEY');

  if (!templateId) {
    throw new Error('Missing EmailJS template id.');
  }

  const response = await fetch(EMAILJS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: templateParams
    })
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `EmailJS request failed with status ${response.status}`);
  }
};
