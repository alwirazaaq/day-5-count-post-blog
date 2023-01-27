function getData(){
let name = document.getElementById('name').value
let email = document.getElementById('email').value
let phone = document.getElementById('phone').value
let subject = document.getElementById('subject').value
let description = document.getElementById('decription').value


  if(name == "") {
    alert("nama harus di isi")
  } else if(email == "") {
    alert("email harus di isi")
  } else if(phone == "") {
    alert("phone harus di isi")
  } else if(subject == "") {
    alert("subject harus di isi")
  } else if(descriptio == "") {
    alert("description harus di isi")
  }

  const defaultemail = "alwirazaq022@gmail.com"

  let mailTo = document.createElement('a')
  mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=halo nama saya
  ${name}, saya ingin ${description} tolong hubungi saya ${phone}`
  mailTo.cllik()

  let audience = {
    name,
    email,
    phone,
    subject,
    description
  }

  console.log(audience)

}


