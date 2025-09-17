import styles from './styles.module.css';

type DeafultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DeafultInput({
  id,
  type,
  labelText,
  ...rest
}: DeafultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
