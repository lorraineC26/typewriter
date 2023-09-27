const sentence = "hello there from lighthouse labs";

// all appear at once with 1000 delay
// for (const char of sentence) {
//   setTimeout(() => { // Add a setTimeout call within the loop, to delay the character output a bit.
//     process.stdout.write(char);
//   }, 1000);
// }

// each letter delay its appearance by 50ms longer than the previous letter.
for (let index = 0; index < sentence.length; index++) {

  if (index === sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(sentence[sentence.length - 1] + "\n");
    }, 50 * index + 50);
  } else {
    setTimeout(() => {
      process.stdout.write(sentence[index]);
    }, 50 * index);
  }
}
