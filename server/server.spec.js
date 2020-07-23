const request = require("supertest");

const server = require("./server");

describe("server.js", () => {
  it("should return a status of 200 on the index api route", async () => {
    const expected = 200;

    const response = await request(server).get("/api");

    expect(response.status).toEqual(expected);
  });

  it("should return the correct body and type of JSON", async () => {
    const expected = { api: "ONLINE" };
    const expectedType = "application/json";

    const response = await request(server).get("/api");

    expect(response.body).toEqual(expected);

    expect(response.type).toEqual(expectedType);
  });
});
