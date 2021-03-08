// eslint-disable-next-line
// @ts-nocheck
import React, { useRef, useState } from 'react';

import AlreadyRegistered from './already-registered';
import ConsentNote from './consent-note';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import RegisterationSuccess from './registeration-success';
import cn from 'classnames';
import styles from './register-with-email.module.css';
import validator from 'validator';

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_ID = process.env.SHEET_ID;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const RegisterWithEmail = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
  const [emailError, setEmailError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  const validateEmail = (e) => {
    var email = e.target.value
    console.log(email)
    if (validator.isEmail(email) || !email) { 
      setEmailError('') 
    } else {
      setEmailError('Please enter a valid email.') 
    }
  }

  const addEmail = async email => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      const rows = await sheet.getRows();
      let existingEmails = [];
      rows.map(row => {
        existingEmails.push(row._rawData[0]);
      });
      console.log(existingEmails, existingEmails.includes(email), email);

      if (existingEmails.includes(email)) {
        setIsAlreadyRegistered(true);
        setSubmitted(true);
      } else {
        const result = await sheet.addRow({ Emails: email });
        setSubmitted(true);
      }
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = inputRef.current?.value;
    addEmail(email);
  };

  return !submitted ? (
    <div>
      <h2 className="heading-tertiary">Register with your email</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          name="email"
          type="email"
          placeholder="Enter your email"
          autoFocus
          required
          onChange={e => validateEmail(e)}
        />
        { 
          emailError ? <span className={styles.error}>{emailError}</span> : null
        }
        <button type="submit" className={cn('btn', styles.btn)} disabled={emailError ? true : false}>
          Register Now
        </button>
      </form>
      <ConsentNote />
    </div>
  ) : isAlreadyRegistered ? (
    <AlreadyRegistered />
  ) : (
    <RegisterationSuccess />
  );
};

export default RegisterWithEmail;
