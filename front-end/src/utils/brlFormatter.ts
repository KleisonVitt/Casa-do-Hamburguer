export const brlFormatter = (value: number) => {
  return `R$${value.toFixed(2).replace(".", ",")}`;
};
