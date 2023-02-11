const form = document.getElementById("contact-form");
const submit = document.getElementById('submit');

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault()

  const formData = new FormData();
  formData.append(
    'fullname',
    document.querySelector('input[name="fullname"]').value
  )
  formData.append(
    'email',
    document.querySelector('input[name="email"]').value
  )
  formData.append(
    'phone',
    document.querySelector('input[name="phone"]').value
  )
  formData.append(
    'company_name',
    document.querySelector('input[name="company_name"]').value
  )
  formData.append(
    'project_name',
    document.querySelector('input[name="project_name"]').value
  )
  formData.append(
    'project_desc',
    document.querySelector('input[name="project_desc"]').value
  )
  formData.append(
    'department',
    document.querySelector('select[name="department"]').value
  )
  formData.append(
    'message',
    document.querySelector('textarea[name="message"]').value
  )
  formData.append(
    'file',
    document.querySelector('input[name="file"]').value
  )

  const data = {}
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  fetch('http://99.79.77.144:3000/api/contact',{
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data),
	  })
		.then((response) => response.json())
		.then((data) => {
		  console.log('Success:', data);
		})
		.catch((error) => {
		  console.log('Error:', error);
		});
	};

