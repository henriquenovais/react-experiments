import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const ContactModal = (): JSX.Element => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className={styles.main}>
      <form>
        <input
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          required
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button disabled={!isValid}>Submit</button>
      </form>
      I am the contact modal
    </div>
  );
};
