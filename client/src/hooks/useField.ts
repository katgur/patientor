import { useState } from 'react';
import { getDate } from '../utils';

interface Props {
    label: string;
    type: string;
}

function useField({ label, type }: Props) {
    const [value, setValue] = useState<string>(type === 'date' ? getDate() : '');
    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };
    return { value, onChange, label, type };
}

export default useField;