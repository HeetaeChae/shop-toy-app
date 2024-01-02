function translateIsChecked(isChecked: number | null) {
  switch (isChecked) {
    case 0:
      return "미확인";
    case 1:
      return "확인";
    default:
      return "알 수 없음";
  }
}
export default translateIsChecked;
