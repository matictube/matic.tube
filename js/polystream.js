const { ethereum } = window;
let crypt = new JSEncrypt({'default_key_size': 2048});

if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
  ethereum.request({ method: 'eth_accounts' }).then(getAccount).catch(console.error);
}

const ethereumButton = document.querySelector('.enableEthereumButton');
ethereumButton.addEventListener('click', () => {
  getAccount();
});


const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner()
const abi = [{"inputs": [{"internalType": "uint96", "name": "_movie_id", "type": "uint96"}, {"internalType": "string", "name": "_title", "type": "string"}, {"internalType": "string", "name": "_thumb_url", "type": "string"}, {"internalType": "string", "name": "_misc", "type": "string"}, {"internalType": "bool", "name": "_rdy", "type": "bool"} ], "name": "add_movie", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint96", "name": "_answer_index", "type": "uint96"}, {"internalType": "string", "name": "_encrypted_answer", "type": "string"} ], "name": "answer", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint96", "name": "_movie_id", "type": "uint96"}, {"internalType": "string", "name": "_public_key", "type": "string"} ], "name": "ask_movie", "outputs": [{"internalType": "uint96", "name": "", "type": "uint96"} ], "stateMutability": "payable", "type": "function"}, {"inputs": [], "name": "purge_movies", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "purge_pending_ask", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "string", "name": "_new_contract_version", "type": "string"} ], "name": "update_contract_version", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint96", "name": "_index", "type": "uint96"}, {"internalType": "uint96", "name": "_movie_id", "type": "uint96"}, {"internalType": "string", "name": "_title", "type": "string"}, {"internalType": "string", "name": "_thumb_url", "type": "string"}, {"internalType": "string", "name": "_misc", "type": "string"}, {"internalType": "bool", "name": "_rdy", "type": "bool"} ], "name": "update_movie", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "bool", "name": "_online", "type": "bool"} ], "name": "update_online", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "_admin_address", "type": "address"} ], "name": "update_owner", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "_price", "type": "uint256"} ], "name": "update_price", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "admin_address", "outputs": [{"internalType": "address", "name": "", "type": "address"} ], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint96", "name": "", "type": "uint96"} ], "name": "AskList", "outputs": [{"internalType": "address", "name": "owner", "type": "address"}, {"internalType": "uint96", "name": "movie_id", "type": "uint96"}, {"internalType": "uint256", "name": "ask_date", "type": "uint256"}, {"internalType": "string", "name": "public_key", "type": "string"}, {"internalType": "string", "name": "encrypted_answer", "type": "string"}, {"internalType": "uint256", "name": "answer_date", "type": "uint256"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "AskListIndex", "outputs": [{"internalType": "uint96", "name": "", "type": "uint96"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "bank", "outputs": [{"internalType": "address payable", "name": "", "type": "address"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "Current_price", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "get_ask_list", "outputs": [{"components": [{"internalType": "address", "name": "owner", "type": "address"}, {"internalType": "uint96", "name": "movie_id", "type": "uint96"}, {"internalType": "uint256", "name": "ask_date", "type": "uint256"}, {"internalType": "string", "name": "public_key", "type": "string"}, {"internalType": "string", "name": "encrypted_answer", "type": "string"}, {"internalType": "uint256", "name": "answer_date", "type": "uint256"} ], "internalType": "struct PolyStream.Ask[]", "name": "", "type": "tuple[]"} ], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint96", "name": "_cursor", "type": "uint96"} ], "name": "get_library", "outputs": [{"components": [{"internalType": "uint96", "name": "movie_id", "type": "uint96"}, {"internalType": "string", "name": "title", "type": "string"}, {"internalType": "string", "name": "thumb_url", "type": "string"}, {"internalType": "string", "name": "misc", "type": "string"}, {"internalType": "bool", "name": "rdy", "type": "bool"} ], "internalType": "struct PolyStream.Movie[]", "name": "", "type": "tuple[]"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "get_pending_ask", "outputs": [{"internalType": "uint96[]", "name": "", "type": "uint96[]"} ], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint96", "name": "", "type": "uint96"} ], "name": "MovieList", "outputs": [{"internalType": "uint96", "name": "movie_id", "type": "uint96"}, {"internalType": "string", "name": "title", "type": "string"}, {"internalType": "string", "name": "thumb_url", "type": "string"}, {"internalType": "string", "name": "misc", "type": "string"}, {"internalType": "bool", "name": "rdy", "type": "bool"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "MovieListIndex", "outputs": [{"internalType": "uint96", "name": "", "type": "uint96"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "new_contract_version", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "Online", "outputs": [{"internalType": "bool", "name": "", "type": "bool"} ], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "", "type": "uint256"} ], "name": "Pending_ask", "outputs": [{"internalType": "uint96", "name": "", "type": "uint96"} ], "stateMutability": "view", "type": "function"} ]
const polystream = new ethers.Contract('0xfaC8D1213a5e7b80C407e9D4dd3A8E75DDdf639E', abi, signer);

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  account = accounts[0];
  ethereumButton.innerHTML = account;
  $('#alert_need_metamask').remove()
  $('#load_movie').html('')
  getMovieList(0)
}

async function getMovieList(_index) {
  
  let movieListIndex = await polystream.MovieListIndex();
  let movies = await polystream.get_library(_index);

  for(i in movies) {
    let misc = movies[i][3].split(';')
    console.log(movies[i])
    if(movies[i][4] == true) {
      $('#load_movie').append(`
        <div class="col-6 col-sm-4 col-lg-3 col-xl-2 movie_card" data-date="`+misc[0]+`" data-genre="`+misc[1]+`" data-title="`+movies[i][1]+`">
          <div class="card">
          <a href="#`+movies[i][0].toString()+`" class="card__cover" data-movie-id="`+movies[i][0].toString()+`" data-movie-title="`+movies[i][1]+`" style="background:url(`+movies[i][2]+`);background-size: cover;background-repeat: no-repeat;background-position: center center;">
            <img src="img/card/1.png" alt="" style="opacity: 0;">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <h3 class="card__title">
           <a href="details.html">`+movies[i][1]+`</a>
          </h3>
          <ul class="card__list">
            <li>`+misc[2]+`</li>
            <li>`+misc[1]+`</li>
            <li>`+misc[0]+`</li>
          </ul>
        </div>
      </div>`)
    }
  }

  if((_index+50) < parseInt(movieListIndex.toString())) {
    console.log('Load next : ' + (_index+50))
    getMovieList((_index+50))
  } else {
    console.log('All movies loaded !')
  }
}


$('#select2-genre').on('select2:select', function (e) {
  let genre = $(this).val();
  $( "#load_movie .movie_card" ).each(function( index ) {
    if($( this ).attr('data-genre') != genre) {
      $( this ).hide();
    } else {
      $( this ).show();
    }
    if(genre == "All genres") { $( this ).show(); }
  });
});

//
$(document).on("keyup", '#search_title', async function(event) {
  let search = $(this).val().toLowerCase();
  $( "#load_movie .movie_card" ).each(function( index ) {
    let title = $( this ).attr('data-title').toLowerCase()
    console.log(title.match(search))
    if( title.match(search) == null) {
      $( this ).hide();
    } else {
      $( this ).show();
    }
  });
});

$(document).on("click", '.card__cover', async function(event) {

  let movie_id = $(this).attr('data-movie-id');
  let movie_title = $(this).attr('data-movie-title');

  try {

    let result = await new swal({
      title: 'Purchase confirmation',
      html: 'Pay 0.10$ to watch the movie : <br>' + movie_title,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: `Cancel`,
    }); 
    
    if(result.isConfirmed) {
      Swal.fire('Waiting metamask payment..', '', 'info')
      let tx = await polystream.connect(signer).ask_movie(movie_id, localStorage.getItem("publicKey"), { value: "106141450465377000" });
      receipt = await tx.wait();
      if (receipt.status) {
        let txn_test = await provider.getTransaction(receipt.transactionHash);
        if (txn_test) {
          $('.swal2-container').remove()
          let timerInterval
          Swal.fire({
            title: 'Your film is coming...',
            html: 'Don\'t close this page',
            timer: 120*1000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          })
        }
      } else {
        console.log('error')
      }

      
    } 
  } catch(e){
    $('.swal2-container').remove()
    Swal.fire('Payment fail!', '', 'error')
    console.error(e);
  }
});

$(document).on("click", '#close_player', async function(event) {
  $('#player').html('');
  $('#player').hide();
});

setInterval(async function () {
  let askList = await polystream.get_ask_list();
  for(i in askList) {
    if(askList[i][0].toLowerCase() == account) {
      if(localStorage.getItem(askList[i][5].toString()) == null) {
        if(askList[i]['encrypted_answer'] != "") {
          let decrypted_answer = crypt.decrypt(askList[i]['encrypted_answer']);
          localStorage.setItem(askList[i][5].toString(), decrypted_answer);
          $('#player').html('<div id="close_player"><i class="bi bi-x-circle-fill"></i></i></div><iframe src="'+decrypted_answer+'&autoplay=false&preload=false" loading="lazy" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>')
          $('#player').show();
          $('.swal2-container').remove()
        }
      }
    }
  }
}, 5000);



if(localStorage.getItem("publicKey") == null) {
  localStorage.setItem("publicKey", crypt.getPublicKey());
  localStorage.setItem("privateKey", crypt.getPrivateKey());
} else {
  crypt.setPrivateKey(localStorage.getItem("privateKey"));
}