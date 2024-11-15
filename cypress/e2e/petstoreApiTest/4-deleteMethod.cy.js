describe("DELETE METHOD", () => {
    const myPet = {
      id: 956232515615,
      name: "karabas",
      status: "available",
      updatedStatus: "sold",
    };
  
    it("Pet ID ile silme işlemi (Delete)", () => {
      cy.request("DELETE", `/pet/${myPet.id}`).then((response) => {
        expect(response.status).to.equal(200);
      });
      cy.request({ url: `/pet/${myPet.id}`, failOnStatusCode: false }).then(
        (response) => {
          expect(response.status).to.equal(404);
        }
      );
    });
  });