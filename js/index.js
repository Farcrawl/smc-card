/**
 * Function to populate values in card from form input
 */
function generateCard() {
    // Get value of SMC Staff name from form input 
    const nameElement = document.getElementById("name");
    const nameValue = nameElement.value; 
    // Assign the value of student name to generated card
    const cardNameElement = document.getElementById("cardName");
    cardNameElement.innerHTML = nameValue;

    // Get value of company name from form input 
    const companyNameValue = document.getElementById("company").value;
    // Assign the value of company name to generated card
    document.getElementById("cardCompany").innerHTML = companyNameValue;

    // Get value of company name from form input 
    const departmentNameValue = document.getElementById("department").value;
    // Assign the value of company name to generated card
    document.getElementById("cardDepartment").innerHTML = departmentNameValue;


    // Display final generated card to user     
    document.getElementById("collegeCard").style.display = "block";
	
	const image_input = document.querySelector("#image-input");

	image_input.addEventListener("change", function() {
	  const reader = new FileReader();
	  reader.addEventListener("load", () => {
		const uploaded_image = reader.result;
		document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
	  });
	  reader.readAsDataURL(this.files[0]);
	});
}
