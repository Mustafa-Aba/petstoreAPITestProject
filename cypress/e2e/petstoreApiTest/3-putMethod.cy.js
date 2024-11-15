describe("PUT METHOD", () => {
  const myPet = {
    id: 956232515615,
    name: "karabas",
    status: "available",
    updatedStatus: "sold",
  };

  it("Bir pet değiştirme işlemi(Update)", () => {
    cy.request("PUT", `/pet`, {
      petId: myPet.id,
      status: myPet.updatedStatus,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal(myPet.updatedStatus);
    });
  });
});