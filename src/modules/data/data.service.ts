const dataService = {
  async findById(id: number) {
    return new Promise((resolve) => {
      resolve({
        id,
        data: [1, 2, 3, 4],
      });
    });
  },
};

export default dataService;
