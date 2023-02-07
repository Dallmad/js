import React, {ChangeEvent, FC, useState} from 'react';

export const App: FC = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const pattern = /^[-]?[0-9]*,?[0-9]*$/;

    const onChangeValue = ({currentTarget: {value}}: ChangeEvent<HTMLInputElement>) => {
        if (!value) {
            setInputValue('');
        } else if (!pattern.test(value)) {
            setInputValue(prevState => prevState);
        } else setInputValue(value);
    }

    return (
        <div>
            <label>Строка ввода:&#32;</label>
            <input
                value={inputValue}
                onChange={e => onChangeValue(e)}
            />
        </div>
    );
}

