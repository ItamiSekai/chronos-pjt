import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';
export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    if (theme == 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <nav className={styles.menu}>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para home'
        title='Ir para home'
      >
        <HouseIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ver historico'
        title='Ver historico'
      >
        <HistoryIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Configuracoes'
        title='Configuracoes'
      >
        <SettingsIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleTheme}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
