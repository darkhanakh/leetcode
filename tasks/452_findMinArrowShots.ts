const findMinArrowShots = (points: number[][]): number => {
  points.sort((a, b) => a[1] - b[1]);
  let arrows = 0;
  let prevEnd = -Infinity;
  for (let point of points) {
    if (point[0] > prevEnd) {
      arrows++;
      prevEnd = point[1];
    }
  }
  return arrows;
};
