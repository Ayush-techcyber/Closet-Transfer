function allButtons(){
    document.getElementById('output').innerHTML =
    `
    <p>Closet Transfer</p>
    <button id="button" onclick="showAddInput()">Want Coupon? Click on me</button>
    <button id="button" onclick="showSubtractionInput()">Learn more about closet transfer</button>
    <div id="inputarea"></div>
    `
}
allButtons();
function showAddInput(){
  document.getElementById('inputarea').innerHTML=
   `
   <div>Steps to get your coupon</div>
  <div id="LAST">1. Follow our Instagram<br>
  2. DM our account on DEPOP with your username on instagram<br>
  3. Once verified send us a request of your order 10% off<br>
  4. Wait for us to accept and enjoy!
  </div>
  <button id="insta" onclick="window.location.href='https://www.instagram.com/closettransfer_/';">Click here to follow our instagram</button>
 `
}

function showSubtractionInput(){
  document.getElementById('inputarea').innerHTML=
   `
   <div>More about Closet Transfer</div>
  <div id="LAST1">Hi! I'm Ayush Singh, founder of Closet Transfer. Through Closet Transfer, I share my love for fashion with others by offering a wide range of clothes and shoes for people who appreciate similar styles. Additionally, 50% of all revenue is donated to the National Eczema Association, supporting both kids and adults, like myself, who live with eczema. The other 50% will be redistributed into my business. Thank you so much for supporting and learning about us!</div>
  <button id="donate" onclick="window.location.href='https://donate.nationaleczema.org/give/193995/?_ga=2.144137276.883619375.1668454232-1371328053.1659295483#!/donation/checkout';">Click here to learn more about eczema and donating</button>
  `
}



