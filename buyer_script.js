
let buyerItemCount = 0;
function addBuyerItem() {
  buyerItemCount++;
  const container = document.getElementById('itemsContainer');
  const div = document.createElement('div');
  div.className = 'item-block';
  div.innerHTML = `
    <h3>Item ${buyerItemCount}</h3>
    <label>Item Name</label><input name="item${buyerItemCount}_name" required>
    <label>Description</label><textarea name="item${buyerItemCount}_desc"></textarea>
    <label>Specification</label><textarea name="item${buyerItemCount}_spec"></textarea>
    <label>Attachment</label><input type="text" name="item${buyerItemCount}_file" placeholder="File name">
    <label>Quantity</label><input type="number" name="item${buyerItemCount}_qty">
    <label>Delivery Days</label><input type="number" name="item${buyerItemCount}_delivery">
    <label>Payment Terms</label><input name="item${buyerItemCount}_payment">
    <label>Freight</label><input name="item${buyerItemCount}_freight">
  `;
  container.appendChild(div);
}

document.getElementById('buyerForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const data = Object.fromEntries(form.entries());
  data.formType = "buyer";
  const response = await fetch("https://script.google.com/macros/s/AKfycbzJvRcGMFk8IIpTlYVjQpPOnNBQdd-uwIOR86kqDW4teYilf-siHFKlkknQD6LbgSZ6Yw/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  alert("Requirement submitted successfully!");
});

window.onload = addBuyerItem;
