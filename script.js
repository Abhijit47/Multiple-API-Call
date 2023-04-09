// Testing URL's
import { posts_URL, comments_URL, albums_URL, photos_URL, users_URL } from './index.js';

// Final URL's
import { ip_URL, pokeApi_URL, openbrewery_URL, loremPicsum_URL, quote_URL } from './index.js';

// Reference all Buttons
const btns = document.querySelectorAll('.btn');

// Reference single button
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');

// Global Data Receive
let data = [];

// Test Case:
// let urls = [posts_URL, comments_URL, albums_URL, photos_URL, users_URL];

// Final Case:
let urls = [ip_URL, pokeApi_URL, openbrewery_URL, loremPicsum_URL, quote_URL];

// Using XHR Request
function apiCall(URL) {

  // Create a xhr object with constructor
  const xhr = new XMLHttpRequest();

  // Pass two arguments in "open() method"
  xhr.open("GET", URL);

  // Receiving data
  xhr.onload = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      data = JSON.parse(xhr.responseText);
      console.log(data);
    }
    //if condition end
  }
  // xhr onload () end

  // Initiates the request
  xhr.send();
}

// Using forEach to select each button
btns.forEach(btn => {
  let btnName = btn.name;
  // console.log(btnName);

  // This function will execute every button clicked.
  function universal() {
    // if (btn.name === btnName) {
    //   console.log(btn);
    // }

    switch (btnName) {
      case 'btn1':
        // console.log(urls[0]);
        apiCall(urls[0]);
        break;

      case 'btn2':
        // console.log(urls[1]);
        apiCall(urls[1])
        break;

      case 'btn3':
        // console.log(urls[2]);
        apiCall(urls[2]);
        break;

      case 'btn4':
        // console.log(urls[3]);
        apiCall(urls[3]);
        break;

      case 'btn5':
        // console.log(urls[4]);
        apiCall(urls[4]);
        break;

      default:
        console.log("Match not found!!!");
        break;
    }
  }

  btn.addEventListener('click', universal)
});

// Some Repeatative code

// function getBtn1Data() {
//   apiCall(ip_URL);
//   // btn1.disabled = true;
//   console.log("Data 1");
// }
// btn1.addEventListener('click', getBtn1Data);

// function getBtn2Data() {
//   apiCall(pokeApi_URL);
//   // btn2.disabled = true;
//   console.log("Data 2");
// }

// btn2.addEventListener('click', getBtn2Data);

// function getBtn3Data() {
//   apiCall(openbrewery_URL);
//   console.log("Data 3");
// }

// btn3.addEventListener('click', getBtn3Data);

// function getBtn4Data() {
//   apiCall(quote_URL);
//   console.log("Data 4");
// }

// btn4.addEventListener('click', getBtn4Data);

// function getBtn5Data() {
//   apiCall(loremPicsum_URL);
//   console.log("Data 5");
// }

// btn5.addEventListener('click', getBtn5Data);