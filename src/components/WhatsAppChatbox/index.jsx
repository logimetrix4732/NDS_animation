import React, { useState } from "react";
import "./WhatsAppChatbox.css";

const WhatsAppChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    // WhatsApp number - aap yahan apna number add kar sakte hain
    const phoneNumber = "919876543210"; // Replace with your WhatsApp number
    const message = "Hello! NDDB Dairy Services";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = () => {
    const email = "enquiry@nddbdairyservices.com";
    const subject = "Inquiry about services";
    const body = "Hello! I would like to know more about your services.";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <>
      {/* WhatsApp Chat Button */}
      <div className="whatsapp-chat-button" onClick={() => setIsOpen(!isOpen)}>
        <i className="fab fa-whatsapp"></i>
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="whatsapp-chat-popup">
          <div className="whatsapp-chat-header">
            <div className="whatsapp-chat-title">
              <h4>Hello! How can we help you?</h4>
            </div>
            <button
              className="whatsapp-chat-close"
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="whatsapp-chat-content">
            <div className="whatsapp-chat-info">
              <div className="whatsapp-chat-avatar">
                <div className="whatsapp-avatar-circle">
                  <span>NDDB</span>
                </div>
              </div>
              <div className="whatsapp-chat-details">
                <h5>NDDB Dairy Services</h5>
                <p>Business Account</p>
              </div>
            </div>

            <div className="whatsapp-chat-message-box">
              <p className="whatsapp-chat-message">
                Click below to chat on WhatsApp or send us an email to{" "}
                <a
                  href="mailto:enquiry@nddbdairyservices.com"
                  onClick={handleEmailClick}
                >
                  enquiry@nddbdairyservices.com
                </a>
              </p>
            </div>

            <div className="whatsapp-chat-option" onClick={handleWhatsAppClick}>
              <div className="whatsapp-chat-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="whatsapp-chat-text">
                <span>Chat with us</span>
                <span className="whatsapp-chat-org">NDDB Dairy Services</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChatbox;
