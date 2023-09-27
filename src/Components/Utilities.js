export const myAgeToday = () => {
  const birthDate = new Date("1999/08/16");

  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age
};

export const determinarAltura = (larguraAtual) => {
     
        const larguraInicial = 1039;
        const alturaInicial = 2457.25;

        const minLargura = 320;
        const alturaFinal = 5025.44;

        if (larguraAtual > larguraInicial) {
            return alturaInicial;
        }

        if (larguraAtual <= minLargura) {
            return alturaFinal;
        }

        const slope = (alturaFinal - alturaInicial) / (minLargura - larguraInicial);
        return slope * (larguraAtual - larguraInicial) + alturaInicial;
    
}
