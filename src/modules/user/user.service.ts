const userService = {
  findById(id: number) {
    return new Promise((resolve) => {
      resolve({
        id,
        name: 'juntae',
      });
    });
  },
};

export default userService;
