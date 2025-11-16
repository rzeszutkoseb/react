const strContains = (source, search) => {
  if (!search) return true;
  return source.toLowerCase().includes(search.toLowerCase());
};

export default strContains;
