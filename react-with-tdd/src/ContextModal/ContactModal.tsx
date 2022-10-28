import styles from './styles.module.css';

export const ContactModal = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <form>
        <input placeholder="Name" />
        <input placeholder="Phone Number" />
        <input placeholder="Email Address" />
      </form>
      I am the contact modal
    </div>
  );
};
