
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
    <label>Attachment (PDF)</label><input type="file" name="item${buyerItemCount}_file" accept="application/pdf">
    <label>Quantity</label><input type="number" name="item${buyerItemCount}_qty">
    <label>Delivery Days</label><input type="number" name="item${buyerItemCount}_delivery">
    <label>Payment Terms</label><input name="item${buyerItemCount}_payment">
    <label>Freight</label><input name="item${buyerItemCount}_freight">
  `;
  container.appendChild(div);
}
window.onload = addBuyerItem;
