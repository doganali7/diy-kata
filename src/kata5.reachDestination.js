const reachDestination = (distance, speed) => {
  const result = distance / speed;
  return String(Math.round(result * 2) / 2);
};
module.exports = reachDestination;
