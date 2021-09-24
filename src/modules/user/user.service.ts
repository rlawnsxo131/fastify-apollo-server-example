export function findById(id: number) {
  return new Promise((resolve) => {
    resolve({
      id,
      name: 'juntae',
    });
  });
}
