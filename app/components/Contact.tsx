import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center pt-28">
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <form className="max-w-xl mx-auto px-4 sm:px-0">
        <div className="mb-4">
          <input type="text" className="w-full p-3 border rounded" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <input type="email" className="w-full p-3 border rounded" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <textarea className="w-full p-3 border rounded" rows={5} placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
