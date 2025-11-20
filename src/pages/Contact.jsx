import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        e.target,
        "your_user_id"    
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        
        {/* Left Side: Info */}
        <div className="contact-info fade-up delay-1">
          <h2>Let’s Connect</h2>
          <p>
            I’m a fresher passionate about frontend development, excited to learn and contribute to impactful projects.
          </p>
          <div className="social-links">
            <a href="mailto:wpiyush62@gmail.com" className="fade-up delay-2">
              <img src="/gmail.png" alt="Gmail" />
            </a>
            <a href="https://www.linkedin.com/in/piyush-wankhede-188005287/" target="_blank" rel="noreferrer" className="fade-up delay-3">
              <img src="/LinkedIn.jpg" alt="LinkedIn" />
            </a>
            <a href="https://github.com/Piyushwankhede03" target="_blank" rel="noreferrer" className="fade-up delay-4">
              <img src="/github.png" alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/wpiyush_03/" target="_blank" rel="noreferrer" className="fade-up delay-5">
              <img src="/instagram.jpg" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/piyush.wankhede.1044" target="_blank" rel="noreferrer" className="fade-up delay-6">
              <img src="/facebook.png" alt="Facebook" />
            </a>
            <a href="https://wa.me/+919860460673" target="_blank" rel="noreferrer" className="fade-up delay-7">
              <img src="/whatsapp.jpg" alt="WhatsApp" />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="contact-form fade-up delay-8" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required className="fade-up delay-9"/>
          <input type="email" name="email" placeholder="Your Email" required className="fade-up delay-10"/>
          <textarea name="message" placeholder="Your Message" required className="fade-up delay-11"></textarea>
          <button type="submit" className="fade-up delay-12">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

