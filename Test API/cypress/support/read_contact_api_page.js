Cypress.Commands.add("read_contact", () => {
	cy.request({
        method: 'GET',
		url:"https://peaceful-wildwood-93487.herokuapp.com/users",
		headers: 
			{
			  'content-type':'application/json'
		
			},
		}).then((response) => {
           expect(response.status).to.eq(200)
           var resp_array= response.body
           var filter_name=resp_array.filter(($ele)=>$ele.Name)  //Filter the array with names
           var list_array=filter_name
           console.log("list array =====", list_array)
           let array_list=[]
           list_array.forEach(($obj,i)=>
           {
               var NameList=$obj.Name
               array_list.push(NameList)   //Push the Names in the array
           })
           console.log(array_list.sort())   // Read the User Names in Alphabetic order

})
})
