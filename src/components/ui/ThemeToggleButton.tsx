import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./ThemeToggleButton.module.css"; // Import the CSS module

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center mr-2">
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        checked={theme === 'dark'}
      />
      <label htmlFor="checkbox" className={`flexBetween ${styles.label}`}>
        <i className="fas fa-sun" />
        <i className="fas fa-moon" />
        <div className={styles.ball} />
      </label>
    </div>
  );
};

export default ThemeToggleButton;