export const capitalEachWord = (sentence = "nama") => {
  console.log(sentence);
  const words = sentence.split(" ");

  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};
