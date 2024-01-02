function translateIsCouponApplied(isCouponApplied: number | null) {
  switch (isCouponApplied) {
    case 0:
      return "쿠폰 미적용";
    case 1:
      return "쿠폰 적용";
    default:
      return "알 수 없음";
  }
}
export default translateIsCouponApplied;
