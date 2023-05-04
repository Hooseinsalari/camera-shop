const truncate = (str) => {
  if (str.length > 25) {
    return str.substring(0, 40) + " ...";
  }
};

export { truncate };
