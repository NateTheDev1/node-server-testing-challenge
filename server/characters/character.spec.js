const request = require("supertest");

const db = require("./characterDB");
const server = require("../server");

const chars = [
  { id: 1, name: "Rick Sanchez", gender: "male", status: "alive" },
  { id: 2, name: "Morty Smith", gender: "male", status: "alive" },
  { id: 3, name: "Summer Smith", gender: "female", status: "alive" },
];

describe("character db", () => {
  it("returns an array of characters", async () => {
    const expected = [...chars];

    const actual = await db.find();

    expect(actual).toEqual(expected);
  });

  it("should return a status of 200", async () => {
    const expected = 200;

    const response = await request(server).get("/api/characters");

    expect(response.status).toEqual(expected);
  });

  it("returns an array of characters from the api", async () => {
    const expected = [...chars];

    const response = await request(server).get("/api/characters");

    expect(response.body.data).toEqual(expected);
  });

  it("inserts a new character object into the db", async () => {
    const expected = await db.find();
    await db.create({ name: "Jerry Smith", gender: "male", status: "alive" });
    const response = await db.find();
    expect(response.length).toBe(expected.length + 1);
    await db.remove("Jerry Smith");
  });
});
