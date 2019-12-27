Cypress.Commands.add("update_contact", () => {
	cy.request({
        method: 'GET',
		url:"https://peaceful-wildwood-93487.herokuapp.com/users",   //check whether the Email exists if user want to delete based on email id
		headers: 
			{
			  'content-type':'application/json'
		
			},
		}).then((response) => {
           expect(response.status).to.eq(200)
           var resp_array= response.body
           var filter_email=resp_array.filter(($ele)=>$ele.Email==='manikandan@gmail.com')  //check if email exists or not
           expect(filter_email).to.not.have.length(0)
        })
    cy.request({
        method: 'PUT',
		url:"https://peaceful-wildwood-93487.herokuapp.com/users/manikandan@gmail.com", //Update the user if email exists or not
		headers: 
			{
			  'content-type':'application/json'
		
			},
            body: {
                "Name": "Mani",
                 "Email": "manikandan@gmail.com",
                "Department": "IT", 
                "PhoneNumber": "7890034678"
                },
            }).then((response) => {
           expect(response.status).to.eq(200)
           console.log(response.body)
        })
    })