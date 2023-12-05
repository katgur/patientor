export const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

export const never = (): never => {
    throw new Error(
        `Unhandled discriminated union member`
    );
};

export const getDate = (): string => {
    return new Date().toJSON().split('T')[0];
}