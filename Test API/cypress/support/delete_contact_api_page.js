Cypress.Commands.add("delete_contact", () => {
	cy.request({
        method: 'GET',
		url:"https://peaceful-wildwood-93487.herokuapp.com/users",    //check whether the Email exists if user want to delete based on email id
		headers: 
			{
			  'content-type':'application/json'
		
			},
		}).then((response) => {
           expect(response.status).to.eq(200)
           var resp_array= response.body
           var filter_email=resp_array.filter(($ele)=>$ele.Email==='manikandan@gmail.com') //check if email exists or not
           expect(filter_email).to.not.have.length(0)
        })
    cy.request({
        method: 'Delete',
		url:"https://peaceful-wildwood-93487.herokuapp.com/users/manikandan@gmail.com",  //If exists , then delete the user based on email id
		headers: 
			{
			  'content-type':'application/json'
		
			},
            }).then((response) => {
           expect(response.status).to.eq(200)
           console.log(response.body)
        })
    })