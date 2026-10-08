

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  PATIENT_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_PATIENT_TEMPLATE,
  JOIN_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_JOIN_TEMPLATE,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Send patient callback request
export async function sendCallbackRequest(formData) {
  // Using EmailJS send API
  const payload = {
    service_id: EMAILJS_CONFIG.SERVICE_ID,
    template_id: EMAILJS_CONFIG.PATIENT_TEMPLATE_ID,
    user_id: EMAILJS_CONFIG.PUBLIC_KEY,
    template_params: {
      patient_name: formData.name,
      patient_gender: formData.gender,
      patient_age: formData.age,
      patient_address: formData.address,
      patient_phone: formData.phone,
      medical_problem: formData.problem,
      submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    },
  };

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error('Failed to send');
  return true;
}

// Send join-with-us request
export async function sendJoinRequest(formData) {
  const payload = {
    service_id: EMAILJS_CONFIG.SERVICE_ID,
    template_id: EMAILJS_CONFIG.JOIN_TEMPLATE_ID,
    user_id: EMAILJS_CONFIG.PUBLIC_KEY,
    template_params: {
      doctor_name: formData.name,
      designation: formData.designation,
      phone: formData.phone,
      reason: formData.reason,
      submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    },
  };

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error('Failed to send');
  return true;
}
