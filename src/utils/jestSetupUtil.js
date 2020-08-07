const spiedConsoleError = jest.spyOn(console, 'error');

beforeAll(() => {
  spiedConsoleError.mockImplementation((message) => {
    throw new Error(message);
  });
});

afterAll(() => {
  spiedConsoleError.mockRestore();
});
