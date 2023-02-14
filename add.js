let count = 0;
let delcount = 3;
let button = document.getElementById('tuikaBtn');
let tbody = document.getElementById('tbody');
console.log(tbody);

button.addEventListener('click', buttonClick);

function delButtonClick(target) {
  target.parentNode.parentNode.remove();


  delcount -= 1;
  console.log(delcount);
  if (delcount < 3) {
    button.style.display = "block";
  }
  console.log('click');
  console.log(target);
};

let del = document.createElement('button');
del.textContent = '削除';
console.log(del);

function buttonClick() {
  let name = document.getElementById('namae').value;
  let nickname = document.getElementById('nickname').value;


  if (!namae || !nickname) {
    return false;
  };


  if (!window.confirm(name + 'さん' + nickname + 'を登録します。よろしいですか？')) {
    return false;
  }


  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  let del = document.createElement('button');

  td1.textContent = name;
  td2.textContent = nickname;
  del.setAttribute('onclick', 'delButtonClick(this)');
  del.textContent = '削除';

  td3.appendChild(del);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  tbody.appendChild(tr);


  alert(name + 'さん' + nickname + 'を登録しました。');

};
