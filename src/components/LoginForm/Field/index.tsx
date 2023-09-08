// == Import : npm
// == Import : local
import { ChangeEvent, useId, useState } from 'react';
import './styles.scss';

interface FieldProps {
  name: string;
  placeholder: string;
  [prop: string]: unknown;
}

/*
  Pour gérer les données de mon formulaire, je dois
  identifier mes champs → attribut `name`

  Dans ce design, le `placeholder est obligatoire`

  Tout le reste est optionnel
*/
function Field({ name, placeholder, ...props }: FieldProps) {
  const inputId = useId();

  const [value, setValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // props obligatoires
        name={name}
        placeholder={placeholder}
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        className="field-input"
        {...props}
      />

      <label htmlFor={inputId} className="field-label">
        {placeholder}
      </label>
    </div>
  );
}

// == Export
export default Field;
