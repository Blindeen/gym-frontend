const log = console.log;

export const success = (...data: any[]) => log('Success ✅️', ...data);

export const warning = (...data: any[]) => log('Warning ⚠️', ...data);

export const error = (...data: any[]) => log('Error ❌', ...data);
