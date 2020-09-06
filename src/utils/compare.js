function compare(a, b) {
  if (a.stargazers_count > b.stargazers_count) return -1;
  return 1;
}

export { compare };
