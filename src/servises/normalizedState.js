function numberWithSpaces(nr) {
  return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function normalizedSate(amount) {
  if (amount === null || amount === undefined) {
    return;
  }
  return numberWithSpaces(amount.toFixed(2));
}
