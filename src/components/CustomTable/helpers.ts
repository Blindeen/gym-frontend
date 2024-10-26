export const getNestedKeyValue = (obj: any, key: string | number) => {
    if (typeof key === 'number') {
        return obj[key];
    }

    const keys = key.split('.');
    let value = obj;
    for (const k of keys) {
        value = value[k];
    }
    return value;
}
