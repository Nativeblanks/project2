// function viewall(event) {
//   event.preventDefault();
//   console.log("view all button pressed");
//   const response = await fetch("/api/employees", {
//     method: "post",
//     body: JSON.stringify({
//       Firstname,
//       Lastname,
//       Title,
//     }),
//     headers: { "Content-type": "application/json" },
//   });
//   if (response.ok) {
//     document.location.replace("/");
//   } else {
//     alert(response.statusText);
//   }
//   console.log("view all button pressed");
// }
// document.querySelector("#view-all").addEventListener("click", viewall);
