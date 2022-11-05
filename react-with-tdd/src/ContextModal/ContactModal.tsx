import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const ContactModal = (submit: any): JSX.Element => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const [isValid, setIsValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    // setIsValid(
    //   !!name &&
    //     !!phone &&
    //     !!email &&
    //     /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone) &&
    //     /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email), //^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
    // );

    setNameError('');
    setPhoneError('');
    setEmailError('');

    // let _valid = (() => {
    //   if (!name) {
    //     setNameError('Name is required');
    //     return false;
    //   } else if (!phone) {
    //     setPhoneError('Phone is required');
    //     return false;
    //   } else if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone)) {
    //     setPhoneError('Phone is improperly formatted');
    //     return false;
    //   } else if (!email) {
    //     setEmailError('Email is required');
    //     return false;
    //   } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    //     setEmailError('Email is improperly formatted');
    //     return false;
    //   } else {
    //     return true;
    //   }
    // })();

    let checkIsNameValid = (() => {
      if (!name) {
        setNameError('Name is required');
        return false;
      } else {
        return true;
      }
    })();

    let checkIsPhoneValid = (() => {
      if (!phone) {
        setPhoneError('Phone is required');
        return false;
      } else if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone)) {
        setPhoneError('Phone is improperly formatted');
        return false;
      } else {
        return true;
      }
    })();

    let checkIsEmailValid = (() => {
      if (!email) {
        setEmailError('Email is required');
        return false;
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError('Email is improperly formatted');
        return false;
      } else {
        return true;
      }
    })();

    setIsNameValid(checkIsNameValid);
    setIsEmailValid(checkIsEmailValid);
    setIsPhoneValid(checkIsPhoneValid);

    setIsValid(isNameValid && isEmailValid && isPhoneValid);
  }, [name, phone, email, isNameValid, isEmailValid, isPhoneValid]);

  return (
    <div className={styles.main}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isValid) {
            submit();
          } else {
          }
        }}
      >
        <div>
          <input
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {!!nameError && <div className={styles.error}>{nameError}</div>}
        </div>
        <div>
          {' '}
          <input
            required
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {!!phoneError && <div className={styles.error}>{phoneError}</div>}
        </div>
        <div>
          <input
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!!emailError && <div className={styles.error}>{emailError}</div>}
        </div>
        <button disabled={!isValid}>Submit</button>
      </form>
    </div>
  );
};
