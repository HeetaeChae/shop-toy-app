function translateIsPrimaryAddress(isPrimaryAddress: number | null) {
  switch (isPrimaryAddress) {
    case 0:
      return "일반 주소지";
    case 1:
      return "대표 주소지";
    default:
      return "알 수 없음";
  }
}
export default translateIsPrimaryAddress;
