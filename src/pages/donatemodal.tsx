import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import './donatemodal.css';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonateModal = ({ isOpen, onClose }: DonateModalProps) => {
  const [formData, setFormData] = useState({
    amount: '',
    paymentMethod: 'paypal'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formData.paymentMethod === 'paypal') {
      // PayPal payment integration - uses standard checkout flow
      const paypalEmail = 'james.mugambi@shieldintl.org';
      const amount = formData.amount;
      
      // Standard PayPal donation link (works for logged in and guest users)
      const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${encodeURIComponent(paypalEmail)}&amount=${amount}&currency_code=USD&item_name=${encodeURIComponent('Anonymous Donation')}&return=${encodeURIComponent(window.location.href)}&cancel_return=${encodeURIComponent(window.location.href)}`;
      
      window.open(paypalUrl, '_blank');
      
      // Optional: Close modal after opening PayPal
      setTimeout(() => {
        onClose();
      }, 1000);
    } else if (formData.paymentMethod === 'mpesa') {
      // M-Pesa is display only - show confirmation
      alert('Please use the M-Pesa details displayed to complete your payment manually.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="donate-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <h1>Donate</h1>
        
        <form onSubmit={handleSubmit}>
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
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleChange}
                />
                <span>PayPal</span>
              </label>
              
              <label className="radio-label mpesa-label">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mpesa"
                  checked={formData.paymentMethod === 'mpesa'}
                  onChange={handleChange}
                />
                <span>Lipa Na M-Pesa</span>
              </label>
            </div>
          </section>

          {/* M-Pesa Details (Display Only) */}
          {formData.paymentMethod === 'mpesa' && (
            <section className="form-section mpesa-details">
              <div className="mpesa-info-box">
                <h3>M-Pesa Payment Details</h3>
                <div className="mpesa-detail">
                  <span className="detail-label">Account Type:</span>
                  <span className="detail-value">Equity Account</span>
                </div>
                <div className="mpesa-detail">
                  <span className="detail-label">Paybill:</span>
                  <span className="detail-value">247247</span>
                </div>
                <div className="mpesa-detail">
                  <span className="detail-label">Account Number:</span>
                  <span className="detail-value">0150285780929</span>
                </div>
                <p className="mpesa-note">Use these details to complete your payment via M-Pesa</p>
              </div>
            </section>
          )}

          {/* Donation Total */}
          <div className="donation-total">
            <span className="total-label">Donation Total:</span>
            <span className="total-amount">${formData.amount || '0.00'}</span>
          </div>

          {/* Submit Button */}
          <button type="submit" className="donate-btn">
            {formData.paymentMethod === 'paypal' ? 'Continue to PayPal' : 'Confirm'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonateModal;