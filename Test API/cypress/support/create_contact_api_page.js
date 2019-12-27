Cypress.Commands.add("create_contact", () => {
	
	cy.request({
	
		method: 'GET',
		url:"https://peaceful-wildwood-93487.herokuapp.com/users",
		headers: 
			{
			  'content-type':'application/json'
		
			},
		}).then((response) => {
		   expect(response.status).to.eq(200) //if response is successful then status is 200
		   
		   var resp_array= response.body
		   var filter_email=resp_array.filter(($ele)=>$ele.Email==='sappalshyna@gmail.com') //finds if array contains duplicate email in table
		   console.log(filter_email)
		  if(filter_email!=0)
		   {
		   console.log('Email already exists')   //Prints message in console
		   
		   }
		   var filter_name=resp_array.filter(($ele)=>$ele.Name==='Ramas') //finds if array contains duplicate name in table
		  if(filter_name!=0)
		   {
		   console.log('User already exists in table')   //Prints message in console
		   
		   }
		   expect(filter_email).to.not.have.length(0)
		   expect(filter_name).to.not.have.length(0)

		  var filter_phone=resp_array.filter(($phone)=>$phone.PhoneNumber)
			  var list_array=filter_phone
			  let array_list=[]
			  list_array.forEach(($obj,i)=>
			  {
				  var NameList=$obj.PhoneNumber
				  expect(NameList).to.be.a('number')	   //finds if phone number is numeric or not
				  array_list.push(NameList)   //Push the Names in the array
			  })
			  console.log(array_list)
		
		
		  })	
	
		
	//If email and name is not duplicate, then create the contact
    cy.request({
    method: 'POST',
	url:"https://peaceful-wildwood-93487.herokuapp.com/users/register",
	failOnStatusCode: false,
    headers: 
    {
      'content-type':'application/json'

    },
   body: {
	"Name": "Raman04",
 	"Email": "sappalshyna@gmail.com",
	"Department": "IT", 
	"PhoneNumber": "&*HHjKJ46781"    //Enter string and more than 10 digits
	},

}).then((response) => {
   console.log(response.body)
   expect(response.body.message).to.eq('PhoneNumber length should be 10 digit and Integer') //If phone number entered more than of 10 digits
})
})
