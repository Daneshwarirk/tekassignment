function onFormSubmit(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;

	/*validations*/
	var isValid = true;
	if(name == ''){
		document.getElementById('nameErr').textContent = 'Name is required';
		isValid = false;
	}else{
		document.getElementById('nameErr').textContent = '';
		isValid = true;
	}
	if(email == ''){
		document.getElementById('emailErr').textContent = 'Email is required';
		isValid = false;
	}else{
		document.getElementById('emailErr').textContent = '';
		isValid = true;
	}
	if(phone == ''){
		document.getElementById('phoneErr').textContent = 'Phone number is required';
		isValid = false;
	}else{
		document.getElementById('phoneErr').textContent = '';
		isValid = true;
	}

	if(isValid){
		var nodatarow = document.getElementById('nodatarow');
		nodatarow.style.display = "none";

		var tableRef = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
		var newRow   = tableRef.insertRow(tableRef.rows.length);
		var newCell  = newRow.insertCell(0);
		var newText  = document.createTextNode(name);
		newCell.appendChild(newText);

		var newCell  = newRow.insertCell(1);
		var newText  = document.createTextNode(email);
		newCell.appendChild(newText);

		var newCell  = newRow.insertCell(2);
		var newText  = document.createTextNode(phone);
		newCell.appendChild(newText);

		var gender = 'Male';
		if(document.getElementById('female').checked){
			gender = 'Female';
		}

		var newCell  = newRow.insertCell(3);
		var newText  = document.createTextNode(gender);
		newCell.appendChild(newText);

		var newCell  = newRow.insertCell(4);
		var removeBtn = document.createElement('button');
		removeBtn.className = 'btn btn-danger btn-sm';
		removeBtn.innerHTML = 'Delete';
		removeBtn.setAttribute('onclick', 'deleteThis(this);');
		newCell.appendChild(removeBtn);

		document.getElementById('successAlert').textContent = 'Added user';
		document.getElementById('successAlert').style.display = 'block';
		formReset();
	}
}

function formReset(){
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var phone = document.getElementById('phone');
	name.value = "";
	email.value = "";
	phone.value = "";
}

function deleteThis(item){
	var parent1 = item.parentElement;
	var parent2 = parent1.parentElement;
	parent2.parentElement.removeChild(parent2);
	var rowCount = document.getElementById('usersTable').rows.length;
	if(rowCount < 4){
		var nodatarow = document.getElementById('nodatarow');
		nodatarow.style.display = "contents";
	}
	document.getElementById('successAlert2').textContent = 'Removed user';
	document.getElementById('successAlert2').style.display = 'block';
}