async function addFormHandler(event) {
    event.preventDefault();
  
    const Firstname = document.querySelector("#firstname").value.trim();
    const Lastname = document.querySelector("#lastname").value.trim();
    const Email = document.querySelector("#email").value.trim();
    const Title = document.querySelector("#title").value.trim();
    const Phone = document.querySelector("#phone").value.trim();
    const Cell = document.querySelector("#cell").value.trim();
    const Hiredate = document.querySelector("#hiredate").value.trim();
    const Dateofbirth = document.querySelector("#dob").value.trim();
    const Facebookaccount = document.querySelector("#facebook").value.trim();
    const Twitteraccount = document.querySelector("#twitter").value.trim();
    const Linkedin = document.querySelector("#linkedin").value.trim();
    const Address_id = document.querySelector("#addressid").value.trim();
    
  
    if (Firstname && Lastname && Email && Title && Hiredate && Dateofbirth) {
      try {
        const response = await fetch("/api/employee", {
          method: "post",
          body: JSON.stringify({
            Firstname,
            Lastname,
            Email,
            Title,
            Phone,
            Cell,
            Hiredate,
            Dateofbirth,
            Facebookaccount,
            Twitteraccount,
            Linkedin,
            Address_id
            
          }),
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
            alert("Successfully created employee, returning to homepage")
          document.location.replace("/loggedIn");
        } else {
          alert(response.statusText);
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  
  document.querySelector(".login-form2").addEventListener("submit", addFormHandler);