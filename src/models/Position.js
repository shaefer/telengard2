const Position = (x, y, z) => {
    return {
        x: x,
        y: y,
        z: z,
        toString: () => `Room: ${x},${y} Floor: ${z+1}`
    }
};
export default Position;