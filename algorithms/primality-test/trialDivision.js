export default function trialDivision(number) {
  if (number % 1 !== 0) {
    //number이 정수인지 check
    return false;
  }

  if (number <= 1) {
    //number이 1보다 작으면 소수가 아니므로 걸러줌
    return false;
  }

  if (number <= 3) {
    //2,3은 소수이므로 true를 반환
    return true;
  }

  if (number % 2 === 0) {
    //2를 제외한 짝수는 소수가 아니므로 false를 반환ㄴ
    return false;
  }

  const dividerLimit = Math.sqrt(number);
  for (let divider = 3; divider <= dividerLimit; divider += 2) {
    if (number % divider == 0) {
      //값이 나눠지는지 확인, 나눠지면 false를 리턴
      return false;
    }
  }

  return true;
}
