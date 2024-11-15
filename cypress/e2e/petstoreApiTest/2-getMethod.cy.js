describe("GET METHOD", () => {
  const myPet = {
    id: 956232515615,
    name: "karabas",
    status: "available",
    updatedStatus: "sold",
  };

  it("Pet ID ile getirme işlemi(Read)", () => {
    cy.request("GET", `/pet/${myPet.id}`).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(myPet.id);
    });
  });

});
