
describe('Test sample api',() => {
    context("GET METHOD", () => {
        it("gets a list of users", () => {
          cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
            expect(response.status).to.eq(200)
          })
        })
      })

      context("POST METHOD", () => {
        it("POST API testing Using Cypress API Plugin", () => {
            cy.request("POST", "https://reqres.in/api/users", {
              name: "morpheus",
              job: "leader",
            }).should((response) => {
              expect(response.status).to.eq(201);
            });
         });
      })

      context("PUT METHOD", () => {
        it("PUT API testing Using Flip Plugin", () => {
          cy.request("PUT", "https://reqres.in/api/users/2", {
            name: "QAAutomationLabs",
            job: "QA Automation Engg",
          }).should((response) => {
            expect(response.status).to.eq(200);
          });
        });
      })

      context("DELETE METHOD", () => {
        it("DELETE API testing Using Cypress API Plugin", () => {
          cy.request("DELETE", "https://reqres.in/api/users/2").should((response) => {
            expect(response.status).to.eq(204);
          });
        });
      })

  })