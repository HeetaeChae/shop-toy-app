function translateRoles(roles: number | null) {
  switch (roles) {
    case 1:
      return "관리자";
    case 2:
      return "판매자";
    case 3:
      return "일반회원";
    default:
      return "알 수 없음";
  }
}
export default translateRoles;
