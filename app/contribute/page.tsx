'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

type PaymentMethod = 'upi' | 'cheque' | 'netbanking';

export default function Contribute() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [chequeNumber, setChequeNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [panCard, setPanCard] = useState('');
  const [aadharNumber, setAadhaarNumber] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // UPI account for donations (QR code available)
  const UPI_ID = 'wctrjadhav@okaxis';
  const WHATSAPP_NUMBER = '9822068794'; // Wing Commander T.R. Jadhav
  const CONTACT_MOBILE = '9822057894';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const amountNum = parseFloat(amount);
    const requiresDocuments = amountNum > 5000;

    // Validate amount
    if (!amount || isNaN(amountNum) || amountNum <= 0) {
      alert('Please enter a valid amount');
      setIsSubmitting(false);
      return;
    }

    // Validate required fields
    if (!donorName || !donorEmail || !donorPhone) {
      alert('Please fill in all required information');
      setIsSubmitting(false);
      return;
    }

    // Validate mobile number (must be exactly 10 digits)
    const phoneDigits = donorPhone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      alert('Mobile number must be exactly 10 digits');
      setIsSubmitting(false);
      return;
    }

    // Validate PAN and Aadhaar for donations above 5000
    if (requiresDocuments && !panCard) {
      alert('PAN card is required for amounts above ₹5000');
      setIsSubmitting(false);
      return;
    }
    if (requiresDocuments && panCard && panCard.length !== 10) {
      alert('PAN card number must be exactly 10 characters');
      setIsSubmitting(false);
      return;
    }
    if (requiresDocuments && !aadharNumber) {
      alert('Aadhaar number is required for amounts above ₹5000');
      setIsSubmitting(false);
      return;
    }
    if (requiresDocuments && aadharNumber && aadharNumber.length !== 12) {
      alert('Aadhaar number must be exactly 12 digits');
      setIsSubmitting(false);
      return;
    }

    // Validate payment method specific fields
    if (paymentMethod === 'cheque' && (!chequeNumber || !bankName)) {
      alert('Please fill in cheque/DD number and bank name');
      setIsSubmitting(false);
      return;
    }

    const donationData = {
      amount,
      paymentMethod,
      donorName,
      donorEmail,
      donorPhone: phoneDigits, // Use cleaned phone number (only digits)
      ...(requiresDocuments && { panCard }),
      ...(requiresDocuments && aadharNumber && { aadharNumber }),
      ...(paymentMethod === 'upi' && { upiId: UPI_ID }),
      ...(paymentMethod === 'cheque' && { chequeNumber, bankName }),
      ...(paymentMethod === 'netbanking' && transactionId && { transactionId }),
    };

    try {
      // Submit to API
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || 'An error occurred. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Success - show success message
      setSubmitMessage({ type: 'success', text: result.message || 'Thank you! Your information has been saved successfully!' });

      // Handle payment method specific actions
      if (paymentMethod === 'upi') {
        // For web, we'll show UPI details and instructions
        const upiUrl = `upi://pay?pa=${UPI_ID}&am=${amount}&cu=INR&tn=Donation%20to%20Maratha%20Samaj%20Pratishthan`;

        // Try to open UPI app (works on mobile browsers)
        if (typeof window !== 'undefined') {
          // Delay to show success message first
          setTimeout(() => {
            window.location.href = upiUrl;
            // Fallback: Show instructions if UPI app doesn't open
            setTimeout(() => {
              alert(`UPI ID: ${UPI_ID}\nAmount: ₹${amount}\n\nPlease use this information in your UPI app to complete the payment.`);
            }, 2000);
          }, 1000);
        }
      } else if (paymentMethod === 'cheque') {
        alert('Thank you for your contribution! Please send the cheque/DD to the following address:\nMaratha Samaj Pratishthan, Chhatrapati Sambhajinagar, Maharashtra');
      } else if (paymentMethod === 'netbanking') {
        alert('Thank you for your contribution! Please complete the transfer and send us the transaction ID.');
      }

      // Reset form after successful submission
      setTimeout(() => {
        setDonorName('');
        setDonorEmail('');
        setDonorPhone('');
        setPanCard('');
        setAadhaarNumber('');
        setChequeNumber('');
        setBankName('');
        setAmount('');
        setTransactionId('');
        setSubmitMessage(null);
      }, 5000);

    } catch (error) {
      console.error('Error submitting donation:', error);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const amountNum = parseFloat(amount || '0');
  const requiresPan = amountNum > 5000;

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb/Hero Section */}
        <section className="relative bg-cover bg-center py-12 sm:py-16 md:py-32" style={{ backgroundImage: 'url(/images/donations-bg.png)' }}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">Contribute</h1>
              <nav className="flex items-center justify-center gap-2 text-white text-sm md:text-base">
                <a href="/" className="hover:text-primary transition">Home</a>
                <span>/</span>
                <span>Contribute</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="bg-gray-50 py-10 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 pb-2">
                    Contribute
                  </h2>

                  <form onSubmit={handleSubmit}>
                    {/* Amount Input */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Donation Amount (₹) *
                      </label>
                      <input
                        type="number"
                        placeholder="e.g.: 1000"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        min="1"
                        step="1"
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base bg-white focus:outline-none focus:border-primary transition"
                      />
                      <p className="text-xs text-gray-500 mt-2 italic">
                        Please enter your desired donation amount
                      </p>
                    </div>

                    {/* Donor Information */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-black mb-4">
                        Donor Information
                      </h3>
                      <input
                        type="text"
                        placeholder="Name *"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        required
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base mb-3 bg-white focus:outline-none focus:border-primary transition"
                      />
                      <input
                        type="email"
                        placeholder="Email *"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        required
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base mb-3 bg-white focus:outline-none focus:border-primary transition"
                      />
                      <input
                        type="tel"
                        placeholder="Mobile Number (10 digits) *"
                        value={donorPhone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, ''); // Only numbers
                          if (value.length <= 10) {
                            setDonorPhone(value);
                          }
                        }}
                        maxLength={10}
                        required
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base bg-white focus:outline-none focus:border-primary transition"
                      />
                    </div>

                    {/* PAN Card and Aadhaar - Required for donations above ₹5000 */}
                    {requiresPan && (
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-black mb-4">
                          PAN Card and Aadhaar Information
                        </h3>
                        <input
                          type="text"
                          placeholder="PAN Card Number (10 characters) *"
                          value={panCard}
                          onChange={(e) => setPanCard(e.target.value.toUpperCase())}
                          maxLength={10}
                          required
                          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base mb-3 bg-white uppercase focus:outline-none focus:border-primary transition"
                        />
                        <input
                          type="text"
                          placeholder="Aadhaar Number (12 digits) *"
                          value={aadharNumber}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, ''); // Only numbers
                            if (value.length <= 12) {
                              setAadhaarNumber(value);
                            }
                          }}
                          maxLength={12}
                          required
                          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base mb-3 bg-white focus:outline-none focus:border-primary transition"
                        />
                        <p className="text-sm text-gray-600 italic mt-2">
                          PAN card (10 characters) and Aadhaar number (12 digits) are mandatory for amounts above ₹5000 as per income tax rules.
                        </p>
                      </div>
                    )}

                    {/* Payment Method Selection */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-black mb-4">
                        Select Payment Method
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('upi')}
                          className={`flex-1 min-w-[30%] px-4 py-3 rounded-lg border-2 font-semibold text-sm md:text-base transition ${
                            paymentMethod === 'upi'
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-primary/50'
                          }`}
                        >
                          UPI
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('cheque')}
                          className={`flex-1 min-w-[30%] px-4 py-3 rounded-lg border-2 font-semibold text-sm md:text-base transition ${
                            paymentMethod === 'cheque'
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-primary/50'
                          }`}
                        >
                          Cheque/DD
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('netbanking')}
                          className={`flex-1 min-w-[30%] px-4 py-3 rounded-lg border-2 font-semibold text-sm md:text-base transition ${
                            paymentMethod === 'netbanking'
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-primary/50'
                          }`}
                        >
                          Net Banking
                        </button>
                      </div>
                    </div>

                    {/* Payment Method Specific Fields */}
                    {paymentMethod === 'upi' && (
                      <div className="mb-6 bg-gray-50 p-4 rounded-lg border-2 border-primary/20">
                        <h3 className="text-lg font-bold text-black mb-3">
                          UPI Payment
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">Pay to:</p>
                        <p className="text-xl text-primary font-bold tracking-wide mb-2">
                          {UPI_ID}
                        </p>
                        <p className="text-base text-gray-700 font-semibold mb-3">
                          Amount: ₹{amount || '0'}
                        </p>
                        <p className="text-sm text-gray-600 italic mb-3">
                          Click the &quot;Contribute&quot; button to complete payment in your UPI app or scan the QR code.
                        </p>
                        <div className="bg-green-50 p-3 rounded-md border border-green-500 mt-3">
                          <p className="text-xs text-green-800 font-semibold mb-1">
                            After sending the donation, please send a screenshot of the donation amount with your name via WhatsApp:
                          </p>
                          <p className="text-sm text-primary font-bold mt-1">
                            {WHATSAPP_NUMBER} (Wing Commander T.R. Jadhav)
                          </p>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'cheque' && (
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-black mb-4">
                          Cheque/DD Information
                        </h3>

                        {/* Bank Account Details */}
                        <div className="bg-gray-50 p-4 rounded-lg mb-5 border-2 border-primary/20">
                          <h4 className="text-base font-bold text-black mb-3">
                            Bank Account Details
                          </h4>
                          <div className="space-y-2">
                            <div className="flex justify-between py-2 border-b border-gray-200">
                              <span className="text-sm text-gray-600 font-semibold">Account Holder Name:</span>
                              <span className="text-sm text-black font-semibold">Maratha Samaj Pratishthan</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-200">
                              <span className="text-sm text-gray-600 font-semibold">Account Number:</span>
                              <span className="text-sm text-black font-semibold font-mono">80087057609</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-200">
                              <span className="text-sm text-gray-600 font-semibold">IFSC Code:</span>
                              <span className="text-sm text-primary font-bold font-mono">MAHG0005129</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-200">
                              <span className="text-sm text-gray-600 font-semibold">Bank Name:</span>
                              <span className="text-sm text-black font-semibold">Maharashtra Gramin Bank</span>
                            </div>
                            <div className="flex justify-between py-2">
                              <span className="text-sm text-gray-600 font-semibold">Branch:</span>
                              <span className="text-sm text-black font-semibold">Samarth Nagar, Chhatrapati Sambhajinagar</span>
                            </div>
                          </div>
                        </div>

                        {/* Form Fields */}
                        <div className="mb-4">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Donation Amount (₹) *
                          </label>
                          <input
                            type="number"
                            placeholder="e.g.: 1000"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            min="1"
                            step="1"
                            className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base mb-3 bg-white focus:outline-none focus:border-primary transition"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Cheque/DD Number *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g.: 123456"
                            value={chequeNumber}
                            onChange={(e) => setChequeNumber(e.target.value)}
                            required
                            className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base bg-white focus:outline-none focus:border-primary transition"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Bank Name *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g.: State Bank of India"
                            value={bankName}
                            onChange={(e) => setBankName(e.target.value)}
                            required
                            className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base bg-white focus:outline-none focus:border-primary transition"
                          />
                        </div>

                        {/* Instructions */}
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300 mt-4">
                          <h4 className="text-sm font-bold text-orange-700 mb-3 flex items-center gap-2">
                            Important Instructions:
                          </h4>
                          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 leading-relaxed">
                            <li>
                              Please write the cheque/DD in the name of &quot;Maratha Samaj Pratishthan&quot;
                            </li>
                            <li>
                              Amount in cheque/DD: <strong className="text-primary">₹{amount || '0'}</strong>
                            </li>
                            <li>
                              Address to send cheque/DD:
                              <br />
                              <strong className="text-black block mt-1">
                                Maratha Samaj Pratishthan<br />
                                Samarth Nagar, Chhatrapati Sambhajinagar,<br />
                                Maharashtra
                              </strong>
                            </li>
                            <li>
                              After sending the donation, please send a screenshot of the donation amount with your name via WhatsApp:
                              <br />
                              <strong className="text-primary block mt-1 text-base">
                                {WHATSAPP_NUMBER} (Wing Commander T.R. Jadhav)
                              </strong>
                            </li>
                            <li>
                              Contact Mobile: <strong>{CONTACT_MOBILE}</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'netbanking' && (
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-black mb-4">
                          Net Banking Information
                        </h3>

                        {/* Amount Input */}
                        <div className="mb-5">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Donation Amount (₹) *
                          </label>
                          <input
                            type="number"
                            placeholder="e.g.: 1000"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            min="1"
                            step="1"
                            className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base bg-white focus:outline-none focus:border-primary transition"
                          />
                        </div>

                        {/* Bank Account Details */}
                        <div className="bg-gray-50 p-5 rounded-lg mb-5 border-2 border-primary/20">
                          <h4 className="text-base font-bold text-black mb-4 flex items-center gap-2">
                            Bank Account Details
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-white p-3 rounded-md border border-gray-200">
                              <div className="text-xs text-gray-500 mb-1">Account Holder Name</div>
                              <div className="text-base font-bold text-black">Maratha Samaj Pratishthan</div>
                            </div>
                            <div className="bg-white p-3 rounded-md border border-gray-200">
                              <div className="text-xs text-gray-500 mb-1">Account Number</div>
                              <div className="text-lg font-bold text-primary font-mono tracking-wide">80087057609</div>
                            </div>
                            <div className="bg-white p-3 rounded-md border border-gray-200">
                              <div className="text-xs text-gray-500 mb-1">IFSC Code</div>
                              <div className="text-lg font-bold text-primary font-mono tracking-wide">MAHG0005129</div>
                            </div>
                            <div className="bg-white p-3 rounded-md border border-gray-200">
                              <div className="text-xs text-gray-500 mb-1">Bank Name</div>
                              <div className="text-base font-semibold text-black">Maharashtra Gramin Bank</div>
                            </div>
                            <div className="bg-white p-3 rounded-md border border-gray-200">
                              <div className="text-xs text-gray-500 mb-1">Branch</div>
                              <div className="text-base font-semibold text-black">Samarth Nagar, Chhatrapati Sambhajinagar, Maharashtra</div>
                            </div>
                            <div className="bg-green-50 p-3 rounded-md border border-green-500">
                              <div className="text-xs text-green-700 font-semibold mb-1">Transfer Amount</div>
                              <div className="text-xl font-bold text-green-900">
                                ₹{amount || '0'}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Step-by-step Instructions */}
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-300 mb-4">
                          <h4 className="text-sm font-bold text-blue-800 mb-3 flex items-center gap-2">
                            Steps to Transfer:
                          </h4>
                          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                            <li>
                              Log in to your bank&apos;s net banking portal
                            </li>
                            <li>
                              Select &quot;Fund Transfer&quot; or &quot;NEFT/RTGS&quot; option
                            </li>
                            <li>
                              Enter the above bank account details (Account Number, IFSC Code)
                            </li>
                            <li>
                              Enter amount: <strong className="text-primary">₹{amount || '0'}</strong>
                            </li>
                            <li>
                              Note down the Transaction ID/Reference Number after the transaction is complete
                            </li>
                          </ol>
                        </div>

                        {/* Important Notes */}
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                          <h4 className="text-sm font-bold text-orange-700 mb-3 flex items-center gap-2">
                            Important Instructions:
                          </h4>
                          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 leading-relaxed">
                            <li>
                              Please enter the IFSC code and account number accurately
                            </li>
                            <li>
                              After the transaction is complete, please send the Transaction ID/Reference Number and screenshot with your name via WhatsApp:
                              <br />
                              <strong className="text-primary block mt-1 text-base">
                                {WHATSAPP_NUMBER} (Wing Commander T.R. Jadhav)
                              </strong>
                            </li>
                            <li>
                              NEFT transactions are usually completed within 2-4 hours
                            </li>
                            <li>
                              Use RTGS transactions for amounts above ₹2 lakh (usually instant)
                            </li>
                          </ul>
                        </div>

                        {/* Transaction ID Field (Optional) */}
                        <div className="mt-4">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Transaction ID/Reference Number (after completion)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g.: NEFT123456789"
                            value={transactionId}
                            onChange={(e) => setTransactionId(e.target.value)}
                            className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base bg-white focus:outline-none focus:border-primary transition"
                          />
                          <p className="text-xs text-gray-500 mt-2 italic">
                            * This field is optional. Fill it after the transaction is complete.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Submit Message */}
                    {submitMessage && (
                      <div className={`p-3 rounded-lg mb-4 mt-4 text-sm ${
                        submitMessage.type === 'success'
                          ? 'bg-green-100 text-green-800 border border-green-300'
                          : 'bg-red-100 text-red-800 border border-red-300'
                      }`}>
                        {submitMessage.text}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition shadow-md mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>Saving...</>
                      ) : (
                        <>
                          Contribute
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
