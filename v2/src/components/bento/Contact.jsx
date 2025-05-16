import React from 'react';

const Contact = () => {
  const contacts = [
    { icon: '📧', label: 'Email', href: 'mailto:contact@example.com' },
    { icon: '🐙', label: 'GitHub', href: 'https://github.com' },
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <div className="bento-card">
      <h2 className="card-title">Contact</h2>
      <div className="contact-links">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span>{contact.icon}</span> {contact.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact; 