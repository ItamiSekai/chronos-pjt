import styles from './styles.module.css';

type DeafaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DeafaultButtonProps) {
  return (
    <>
      <button className={styles.button} {...props}>
        {icon}
      </button>
    </>
  );
}
