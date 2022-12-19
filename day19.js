function centuryFromYear(num) {
  return num % 100 === 0 ? num / 100 : Math.floor(num / 100) + 1
}
