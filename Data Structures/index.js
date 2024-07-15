let a = "abcdhutyijklmnop";
let longestStreak = 1;
let currentStreak = 1;
for (let i = 0; i < a.length; i++) {
  const currElement = a[i];
  const nxtElement = a[i + 1];
  let currentAscValue = currElement?.charCodeAt(0);
  let nxtAscValue = nxtElement?.charCodeAt(0);
  if (currentAscValue + 1 === nxtAscValue) {
    currentStreak += 1;
  } else if (currentAscValue === nxtAscValue) {
    continue;
  } else {
    longestStreak = Math.max(longestStreak, currentStreak);
    currentStreak = 1;
  }
}
console.log(longestStreak);
