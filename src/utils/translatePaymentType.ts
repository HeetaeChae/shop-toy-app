function translatePaymentType(paymentType: string | null) {
  switch (paymentType) {
    case "card":
      return "카드결제";
    default:
      return "알 수 없음";
  }
}
export default translatePaymentType;
