async function addressFormHandler(event) {
    event.preventDefault();

    const myAddressId    = document.querySelector("#idAddressId").value.trim();
    const myOrganization = document.querySelector("#idOrganization").value.trim();
    const myAddressline1 = document.querySelector("#idAddressline1").value.trim();
    const myAddressline2 = document.querySelector("#idAddressline2").value.trim();
    const myCity         = document.querySelector("#idCity").value.trim();
    const myState        = document.querySelector("#idState").value.trim();
    const myZip          = document.querySelector("#idZip").value.trim();
    const myPhone        = document.querySelector("#idPhone").value.trim();
    const myFax          = document.querySelector("#idFax").value.trim();
 
    if (myAddressId) {
      try {
        const response = await fetch("/api/address/edit", {
          method: "post",
          body: JSON.stringify({
              "address_id": myAddressId
              , "Organization": myOrganization
              , "Addressline1": myAddressline1
              , "Addressline2": myAddressline2
              , "City": myCity
              , "State": myState
              , "Zip": myZip
              , "Phone": myPhone
              , "Fax": myFax
          }),
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
          document.location.replace("/api/address");
        } else {
          alert(response.statusText);
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  
  document
    .querySelector(".address-form")
    .addEventListener("submit", addressFormHandler);