export function findById(id: number) {
  return new Promise((resolve) => {
    resolve({
      id,
      data: [1, 2, 3, 4],
    });
  });
}
