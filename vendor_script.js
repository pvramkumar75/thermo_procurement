
let vendorItemCount = 0;
function addVendorItem() {
  vendorItemCount++;
  const container = document.getElementById('quoteItemsContainer');
  const div = document.createElement('div');
  div.className = 'item-block';
  div.innerHTML = `
    <h3>Item ${vendorItemCount}</h3>
    <label>Item Name</label><input name="item${vendorItemCount}_name" required>
    <label>Rate</label><input type="number" name="item${vendorItemCount}_rate">
    <label>Lead Time (Days)</label><input type="number" name="item${vendorItemCount}_lead">
    <label>Payment Terms</label><input name="item${vendorItemCount}_terms">
    <label>Freight</label><input name="item${vendorItemCount}_freight">
    <label>P&F</label><input name="item${vendorItemCount}_pnf">
    <label>Warranty</label><input name="item${vendorItemCount}_warranty">
    <label>Remarks</label><textarea name="item${vendorItemCount}_remarks"></textarea>
  `;
  container.appendChild(div);
}

document.getElementById('vendorForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const data = Object.fromEntries(form.entries());
  data.formType = "vendor";
  const response = await fetch("https://script.google.com/macros/s/AKfycbzJvRcGMFk8IIpTlYVjQpPOnNBQdd-uwIOR86kqDW4teYilf-siHFKlkknQD6LbgSZ6Yw/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  alert("Quote submitted successfully!");
});

window.onload = addVendorItem;
