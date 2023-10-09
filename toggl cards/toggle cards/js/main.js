let toggle_button = document.querySelector('.toggle_button');
// let cards = document.querySelector('.cards');
let time = document.querySelectorAll('.time');
let price = document.querySelectorAll('.price')
// time.onclick = function () {
//    alert('hi');
//    time.innerHTML = "hi";

// }
// let;

toggle_button.onclick = function () {
   toggle_button.classList.toggle('active')

   if (toggle_button.classList.contains('active')) {
      toggle_button.innerHTML = "project";
      
      
      //!for time
      for (var i = 0; i < time.length; i++) {
         time[i].innerText = "/project";
         // console.log(time.length);

      }

      //! for price
      for (var j = 0; j < price.length; j++) {
         price[j].innerText = price[j].innerText * 7;

      }

   } else {
      toggle_button.innerHTML = "hourly";
      
      for (var i = 0; i < price.length; i++) {
         time[i].innerText = "/hourly";
         // console.log(time.length);
      }

      for (var j = 0; j < price.length; j++) {
         price[j].innerText = price[j].innerText / 7;

      }

   }
}