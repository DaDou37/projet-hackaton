import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewsletterSubscription.css';

function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = () => {

    alert(`Merci de vous être abonné avec l'email: ${email}`);
    setEmail('');
  };

  return (
    <div className="container-fluid p-0">
      <div className="newsletter-container d-flex flex-column justify-content-center align-items-center py-5 px-4 text-white rounded">
        <div className="shape-top-left"></div>
        <div className="shape-bottom-right"></div>
        
        <h2 className="newsletter-title">Subscribe our newsletter for newest books updates</h2>
        
        <div className="d-flex w-100 justify-content-center">
          <div className="row w-100 justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control py-2 newsletter-input"
                  placeholder="Type your email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  className="btn btn-light newsletter-button" 
                  onClick={handleSubmit}
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSubscription;
