import request from "supertest";
import app from "../server.js";

describe("GET /1", () => {
    it("should fetch data from SWAPI and return it", async () => {
        const response = await request(app).get("/1");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("name", "Luke Skywalker");
    });
});
