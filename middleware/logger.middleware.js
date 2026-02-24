import now from "../utils/time.utils.js";

let logger = (req, res, next) => {
  console.log(`${req.method} || ${req.url} || ${now()}`);
  next();
};

export default logger;
