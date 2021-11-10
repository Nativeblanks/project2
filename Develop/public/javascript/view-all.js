
Handlebars.registerHelper("list", function(items, options) {
    const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
    return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
  });

  
// async function viewall (event) {
//     event.preventDefault();
//     console.log("view all button pressed")
//     // document.location.replace('/api/employee')

//     const response = await fetch('/api/employees', {
//         method: 'post',
//         body: JSON.stringify({
//             Firstname,
//             Lastname,
//             Title
//         }),
//         headers: { 'Content-type' : 'application/json'}
//     })

//     if (response.ok) {
//         document.location.replace('/')
//     } else {
//         alert(response.statusText)
//     }
//     console.log("view all button pressed")
// }
// document.querySelector('#view-all').addEventListener('click', viewall);

