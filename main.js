let itemList = JSON.parse(localStorage.getItem('itemList')) || [];

function renderList() {
  const tableBody = document.getElementById('itemList');
  tableBody.innerHTML = '';

  itemList.forEach((item) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.item}</td>
      <td>${item.quantity}</td>
      <td>${item.status}</td>
      <td>${item.status == '신청' ? '<button onclick="cancelItem(' + item.id + ')">취소</button>' : ''}</td>
    `;
    tableBody.appendChild(row);
  });
}

function addItem() {
  const itemInput = document.getElementById('item');
  const quantityInput = document.getElementById('quantity');
  const item = itemInput.value;
  const quantity = quantityInput.value;
  
  let currentId = itemList.length + 1;
 
  if (!item || !quantity || quantity <= 0) {
    alert('품명과 수량을 모두 입력해주세요.');
    return;
  }

  const newItem = {
    id: currentId++,
    item,
    quantity,
    status: '신청',
  };
  
  itemList.push(newItem);  
  localStorage.setItem('itemList', JSON.stringify(itemList));

  itemInput.value = '';
  quantityInput.value = 1;
  
  renderList();
}

function cancelItem(id) {
  
const index = itemList.findIndex((item) => item.id === id);
if (index >= 0) {
    itemList[index].status = '취소';   
    localStorage.setItem('itemList', JSON.stringify(itemList));
    
    renderList();
}
}
function clearItemList() {
  localStorage.clear(); 
  document.getElementById("itemList").innerHTML = ""; 
}

renderList();
