const request = require("supertest");
const { app, server } = require("./server");

describe("add and subtract numbers api", () => {
  afterAll(() => {
    server.close();
  });

  it("should return the sum", async () => {
    const response = await request(app)
      .post("/add")
      .send("num1=5&num2=3")
      .set("Content-Type", "application/x-www-form-urlencoded");
    expect(response.body.result).toBe(8);
  });

  it("should return the difference", async () => {
    const response = await request(app)
      .post("/subtract")
      .send("num1=10&num2=4")
      .set("Content-Type", "application/x-www-form-urlencoded");
    expect(response.body.result).toBe(6);
  });

  it("should count empty fields as 0", async () => {
    const response = await request(app)
      .post("/subtract")
      .send("num2=4")
      .set("Content-Type", "application/x-www-form-urlencoded");

    expect(response.body.result).toBe(-4);
  });
});
