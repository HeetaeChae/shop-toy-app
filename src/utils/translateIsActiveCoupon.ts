function translateIsActiveCoupon(isActiveCoupon: number | null) {
  switch (isActiveCoupon) {
    case 0:
      return "사용 불가";
    case 1:
      return "사용 가능";
    default:
      return "알 수 없음";
  }
}
export default translateIsActiveCoupon;
