export default {
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return [Math.sin(deg) * length, Math.cos(deg) * length];
  },
  distanceBetween(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
  }
}