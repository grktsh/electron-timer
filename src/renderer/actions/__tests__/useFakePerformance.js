const useFakePerformance = (timestamps) => {
  const nativePerformance = window.performance;

  class FakePerformance {
    now = timestamps.reduce(
      (mock, timestamp) => mock.mockImplementationOnce(() => timestamp),
      jest.fn())
  }

  beforeEach(() => {
    window.performance = new FakePerformance();
  });

  afterEach(() => {
    window.performance = nativePerformance;
  });
};

export default useFakePerformance;
