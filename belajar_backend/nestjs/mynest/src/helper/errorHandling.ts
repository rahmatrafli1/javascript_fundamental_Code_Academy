export const errorHandling = (code: number, message: any, data?: any) => {
  return {
    data: data,
    code: code,
    message: message,
  };
};
