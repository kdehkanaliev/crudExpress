const now = () => {
  return new Date().toISOString().slice(0, 19);
};

export default now;
