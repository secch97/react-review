import React, { useState } from 'react'

const useCounter = (start: number = 10) => {
    const [value, setValue] = useState<number>(start);

    const increment = (number: number) => {
        setValue(value+number);
    }

    return [value, increment] as const;
}

export default useCounter