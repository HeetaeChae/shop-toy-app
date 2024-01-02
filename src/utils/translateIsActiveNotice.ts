function translateIsActiveNotice(isActive: number | null) {
  switch (isActive) {
    case 0:
      return "비활성";
    case 1:
      return "활성";
    default:
      return "알 수 없음.";
  }
}
export default translateIsActiveNotice;
