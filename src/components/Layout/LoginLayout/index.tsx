import styles from 'styles/Layout/LoginLayout.module.css';
import Logo from 'images/icons/logo.svg';

export function LoginLayout({ children }: any) {
   return (
      <>
         <div className={styles.header}>
            <img src={Logo}></img>
         </div>
         {children}
         <div className={styles.footer}></div>
      </>
   );
}