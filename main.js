      let bitcoinprice = document.querySelector("#btc");
       let Ethprice = document.querySelector("#eth");
       let dogecoinprice = document.querySelector("#bnb");
       let tronprice = document.querySelector("#xrp");
       let bchprice = document.querySelector("#bch");
       let  tetherprice = document.querySelector("#bsc");
       let wkcprice = document.querySelector("#wkc");
       let shibaprice = document.querySelector("#shib");
       let fegprice = document.querySelector("#feg");
       let pitbullprice = document.querySelector("#pitbull");
       let digimonprice = document.querySelector("#digi");
        
      var liveprice = {
           "async":true,
           "scrooSDomain" :true,
           "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctron%2Cbitcoin-cash%2Ctether%2Cwiki-Cat%2Cshiba-inu%2Cpitbull%2CDigimon-Rabbit%2Csafemoon%2Cfeg-token&vs_currencies=usd&include_24hr_change=true",

           "method" : "GET",
           "headers" : {}
      }

         let bitcoinpercent = document.querySelector("#btcpercent");
         let ethereumpercent = document.querySelector("#ethpercent");
         let dogecoinpercent = document.querySelector("#dogepercent");
         let tronpercent = document.querySelector("#trxpercent");
      
         let  tetherpercent = document.querySelector("#usdtpercent");
          let  wikicatpercent = document.querySelector("#wkcpercent");
         let  shibapercent = document.querySelector("#shibpercent");
          let  fegtokenpercent = document.querySelector("#fegpercent");
          let  pitbullpercent = document.querySelector("#pitpercent");
          let  digimonpercent = document.querySelector("#drbpercent");
         
         

          $.ajax (liveprice).done(function (response) {
          console.log(response);
             bitcoinprice.innerHTML = response.bitcoin.usd
             Ethprice.innerHTML = response.ethereum.usd
             dogecoinprice.innerHTML = response.dogecoin.usd
             tronprice.innerHTML = response.tron.usd
             bchprice.innerHTML = response.bitcoincash.usd
            tetherprice.innerHTML = response.tether.usd
             wkcprice.innerHTML = response.safemoon.usd;
            //  shibaprice.innerHTML = response.shiba-inu.usd
             fegprice.innerHTML = response.feg-token.usd
             pitbullprice.innerHTML = response.pitbull.usd
            //  digiprice.innerHTML = response.Digimon-Rabbit.usd
             
             });

              $.ajax (liveprice).done(function (response) {
             tetherprice.innerHTML = response.tether.usd
             wkcprice.innerHTML = response.safemoon.usd;
             pitbullprice.innerHTML = response.pitbull.usd
            
             });
              $.ajax (liveprice).done(function (response) {
           
             pitbullprice.innerHTML = response.pitbull.usd
           
             });
             