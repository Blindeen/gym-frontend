import { Column, Key } from './types';

const getNestedKeyValue = (obj: any, key: string | number) => {
    if (typeof key === 'number') {
        return obj[key];
    }

    const keys = key.split('.');
    let value = obj;
    for (const k of keys) {
        value = value[k];
    }
    return value;
};

export const renderCellContent = (columns: Column[], columnKey: Key, item: any) => {
    const column = columns.find((column) => column.key === columnKey);
    const columnRenderCallback = column?.render;
    if (columnRenderCallback) {
        return columnRenderCallback(getNestedKeyValue(item, columnKey));
    }

    return getNestedKeyValue(item, columnKey);
};
