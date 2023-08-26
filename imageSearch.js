const accesskey = 'eEE5fG5k3cPCrSCre7gb1DBCrpX9bG6i2XwOZXsBtuw';
const accessKey = 'v7DW-ux1-5Tre2bMXd2iDmllZKWqSDBxWkWPDs0Mh-A';
const secretKey = 'BZVwynub9a_EOX_HolUxiTWw_XQYKrPKQbwKa9KjIFA';


const form = document.querySelector('.form');
const inputt = document.getElementById('inputt');
const resul = document.querySelector('.results');
const btn = document.querySelector('.btn');


let keyword ="";
let page = 1;
  
// getData();


async function getData(){
     keyword = inputt.value;
     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
     const res = await fetch(url);
     const data = await res.json();
     const {results} = data;
     console.log(results);
     
     if(page === 1){
          resul.innerHTML = ' ';
     }

    results.map((result) => {
     const {urls, links} = result;
     const img = document.createElement('img');
     img.src = urls.small;
     const link = document.createElement('a');
     link.href=links.html;
     link.target = "_blank"
     link.appendChild(img);
     // console.log(urls.small);
     resul.appendChild(link)
     })
    btn.style.display = 'block';
    }
     
form.addEventListener('submit', function (e){
     e.preventDefault();
     page = 1;
     getData();
});
btn.addEventListener('click', function (e){
     page++;
     getData();
});
