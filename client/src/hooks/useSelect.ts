import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

interface useSelectProps {
    startValue: string | undefined,
}

function useSelect({ startValue }: useSelectProps) {
    const [value, setValue] = useState<string[]>(startValue ? [startValue] : []);
    const onChange = (event: SelectChangeEvent<typeof value>) => {
        setValue(typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value);
    };
    return { value, onChange };
}


export default useSelect;