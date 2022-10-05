export const filteredWords = (album, search) => {
  const result = album.filter((val, ind) => {
    const words = val.title.split(" ");

    const filteredWords = words.filter((__val) => {
      return __val.indexOf(search) !== -1;
    });

    const __result = { id: ind, words: filteredWords };

    const filteredIndex = filteredWords.length > 0 ? __result : false;

    return filteredIndex;
  });
  return result;
};
