import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import './donatemodal.css';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonateModal = ({ isOpen, onClose }: DonateModalProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    stayAnonymous: false,
    amount: '',
    paymentMethod: 'test'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.currentTarget;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formData.paymentMethod === 'offline') {
      // Send email notification for offline donation
      alert('Thank you! We will send payment instructions to your email.');
      // TODO: Implement email logic here
    } else if (formData.paymentMethod === 'paypal') {
      // Redirect to PayPal
      alert('Redirecting to PayPal...');
      // TODO: Implement PayPal integration
    } else if (formData.paymentMethod === 'credit') {
      // Process credit card
      alert('Credit card processing...');
      // TODO: Implement credit card processing
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="donate-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <h1>Donate</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Personal Info */}
          <section className="form-section">
            <h2>Personal Info</h2>
            
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required={!formData.stayAnonymous}
              className="form-input"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Mail Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="stayAnonymous"
                checked={formData.stayAnonymous}
                onChange={handleChange}
              />
              <span>Stay Anonymous</span>
            </label>
          </section>

          {/* Input Amount */}
          <section className="form-section">
            <h2>Input Amount</h2>
            <div className="amount-input">
              <span className="currency">$</span>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>
          </section>

          {/* Payment Method */}
          <section className="form-section">
            <h2>Select Payment Method</h2>
            <div className="payment-methods">
              <label className="radio-label">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="test"
                  checked={formData.paymentMethod === 'test'}
                  onChange={handleChange}
                />
                <span>Test Donation</span>
              </label>
              
              <label className="radio-label">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="offline"
                  checked={formData.paymentMethod === 'offline'}
                  onChange={handleChange}
                />
                <span>Offline Donation</span>
              </label>
              
              <label className="radio-label">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleChange}
                />
                <span>Paypal</span>
              </label>
              
              <label className="radio-label">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === 'credit'}
                  onChange={handleChange}
                />
                <span>Credit Card</span>
              </label>
            </div>
          </section>

          {/* Donation Total */}
          <div className="donation-total">
            <span className="total-label">Donation Total:</span>
            <span className="total-amount">${formData.amount || '0.00'}</span>
          </div>

          {/* Submit Button */}
          <button type="submit" className="donate-btn">
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonateModal;