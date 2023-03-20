var dgc = document.getElementById("dogecoin");
var  eth = document.getElementById("ethereum");
var btc = document.getElementById("bitcoin");

var settings = {
    "async": true,
    "scrossDomain":true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=Dogecoin%2Cethereum%2Cbitcoin&vs_currencies=usd",
"method": "GET",
"headers": {}

}
 $.ajax(settings).done(function (create) {
      dgc.innerHTML = create.dogecoin.usd;
      eth.innerHTML = create.ethereum.usd;
      btc.innerHTML = create.bitcoin.usd;
 })