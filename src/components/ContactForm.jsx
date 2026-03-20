import { useState } from 'react';
import { FORMSPREE_ENDPOINT, EMAIL } from '../data/constants';

const inputClass = 'w-full px-4 py-3 rounded-xl border-2 border-[#e8e4dd] focus:border-[#8B7355] focus:outline-none transition-colors bg-[#F7F4EF]/30';
const labelClass = 'block text-[#2C2C2C] font-medium mb-1.5 text-sm';

export default function ContactForm({ variant = 'default' }) {
  const [status, setStatus] = useState('idle');
  const isEnlarged = variant === 'enlarged';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      const name = form.elements.name?.value || '';
      const phone = form.elements.phone?.value || '';
      const emailVal = form.elements.email?.value || '';
      const address = form.elements.address?.value || '';
      const message = form.elements.message?.value || '';
      const subject = encodeURIComponent('Free Estimate Request - Sterling Stain LLC');
      const body = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\nEmail: ${emailVal}\nAddress: ${address}\n\nAdditional Information:\n${message}`
      );
      window.location.href = `mailto:${encodeURIComponent(EMAIL)}?subject=${subject}&body=${body}`;
      setStatus('success');
      return;
    }

    setStatus('loading');
    try {
      const formData = new FormData(form);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyles = isEnlarged ? 'px-5 py-4 text-base' : '';
  const gapStyles = isEnlarged ? 'space-y-6' : 'space-y-5';

  return (
    <form onSubmit={handleSubmit} className={gapStyles}>
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name *
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          placeholder="Your name"
          className={`${inputClass} ${inputStyles}`}
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          Phone *
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          required
          placeholder="(530) 788-5302"
          className={`${inputClass} ${inputStyles}`}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email *
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          placeholder="your@email.com"
          className={`${inputClass} ${inputStyles}`}
        />
      </div>
      <div>
        <label htmlFor="contact-address" className={labelClass}>
          Address
        </label>
        <input
          type="text"
          id="contact-address"
          name="address"
          placeholder="Property address"
          className={`${inputClass} ${inputStyles}`}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Additional Information <span className="text-[#5D4E37]/70">(optional)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={isEnlarged ? 4 : 3}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none ${inputStyles}`}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full bg-[#8B7355] hover:bg-[#7a6549] disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
          isEnlarged ? 'py-5 text-lg' : 'py-4'
        }`}
      >
        {status === 'loading'
          ? 'Sending...'
          : status === 'success'
          ? "Thank you! We'll be in touch soon."
          : status === 'error'
          ? 'Something went wrong. Please try calling us.'
          : 'Get a Free Estimate'}
      </button>
    </form>
  );
}
