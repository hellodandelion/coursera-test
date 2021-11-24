// DOM manipulation

// lecture 54 DOM manipulation

// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

// function sayHello () {
//   var name = 
//     document.getElementById("name").value
//     var message = "<h2>Hello " + name + "!</h2>";

//   // document
//   //   .getElementById("content")
//   //   .textContent = message;

//     document
//     .getElementById("content")
//     .innerHTML = message;

//   if (name === "student") {
//     var title = 
//       document
//         .querySelector("#title")
//         .textContent;
//     title += " & Lovin' it!";
//     document
//         .querySelector("h1")
//         .textContent = title;
//   }
// }


// function sayHello () {
//   var name =
//    document.getElementById("name").value;
//    var message = "<h2>Hello " + name + "!</h2>";

//   // document
//   //   .getElementById("content")
//   //   .textContent = message;

//   document
//     .getElementById("content")
//     .innerHTML = message;

//   if (name === "student") {
//     var title = 
//       document
//         .querySelector("#title")
//         .textContent;
//     title += " & Lovin' it!";
//     document
//         .querySelector("h1")
//         .textContent = title;
//   }
// }

// Lecture 54/55 = events 

// // Event handling
// document.addEventListener("DOMContentLoaded",
//   function (event) {
    
//     function sayHello (event) {
//       console.log(this);
//       this.textContent = "Said it!";
//       var name =
//        document.getElementById("name").value;
//        var message = "<h2>Hello " + name + "!</h2>";

//       document
//         .getElementById("content")
//         .innerHTML = message;

//       if (name === "student") {
//         var title = 
//           document
//             .querySelector("#title")
//             .textContent;
//         title += " & Lovin' it!";
//         document
//             .querySelector("h1")
//             .textContent = title;
//       }
//     }

//     // Unobtrusive event binding
//     document.querySelector("button")
//       .addEventListener("click", sayHello);

//     document.querySelector("body")
//       .addEventListener("mousemove",
//         function (event) {
//           if (event.shiftKey === true) {
//             console.log("x: " + event.clientX);
//             console.log("y: " + event.clientY);
//           }
//         }
//       );

//   }
// );



// document.querySelector("button")
//   .onclick = sayHello;

// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);





