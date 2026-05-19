const PHONE_NUMBER = "919216399808";

export const getCallLink = () => `tel:+${PHONE_NUMBER}`;

export const getWhatsAppLink = (productName) => {
  const message = `Hello Pinnacle Expo, I am interested in ${productName}. Please share the price, MOQ, packaging, and shipping details.`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};
