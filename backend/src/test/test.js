require("dotenv").config();
const assert = require("assert");
const fetch = require("node-fetch");
const urlAPI = "http://localhost:" + process.env.EXPRESS_PORT ;

describe("Testing user register", () => {
    it("1.Register succesfully", async () => {
      await fetch(urlAPI + "/register").then((response) => {
        //console.log(response.status);
        assert.equal(response.status, 403);
      });
    });
});