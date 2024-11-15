describe("POST METHOD", () => {
  const myPet = {
    id: 956232515615,
    name: "karabas",
    status: "available",
    updatedStatus: "sold",
  };
  it("Yeni bir pet oluşturma işlemi(Create)", () => {
    cy.request("POST", '/pet', myPet).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(myPet.id);
      expect(response.body.name).to.equal(myPet.name);
      expect(response.body.status).to.equal(myPet.status);
    });
  });

});