function translateGender(gender: string | null) {
  switch (gender) {
    case "male":
      return "남성";
    case "female":
      return "여성";
    case "unisex":
      return "공용";
    default:
      return "알 수 없음";
  }
}
export default translateGender;
