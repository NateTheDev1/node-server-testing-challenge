const request = require("supertest");

const db = require("./characterDB");

describe("character db", async () => {
  it("returns an array of characters", async () => {
    const expected = [
      { id: 1, name: "Rick Sanchez", gender: "male", status: "alive" },
      { id: 2, name: "Morty Smith", gender: "male", status: "alive" },
      { id: 3, name: "Summer Smith", gender: "female", status: "alive" },
    ];

    const actual = await db.find();

    expect(actual).toEqual(expected);
  });
});
