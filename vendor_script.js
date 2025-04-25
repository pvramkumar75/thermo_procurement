
let vendorItemCount = 0;
function addVendorItem() {
  vendorItemCount++;
  const container = document.getElementById('quoteItemsContainer');
  const div = document.createElement('div');
  div.className = 'item-block';
  div.innerHTML = `
    <h3>Item ${vendorItemCount}</h3>
    <label>Item Name</label><input name="item_name" required>
    <label>Rate</label><input type="number" name="rate">
    <label>Lead Time (Days)</label><input type="number" name="lead_time">
    <label>Payment Terms</label><input name="payment_terms">
    <label>Freight</label><input name="freight">
    <label>P&F</label><input name="pnf">
    <label>Warranty</label><input name="warranty">
    <label>Remarks</label><textarea name="remarks"></textarea>
  `;
  container.appendChild(div);
}

document.getElementById('vendorForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const vendorName = form.get("vendorName");

  const items = [];
  const blocks = document.querySelectorAll(".item-block");
  blocks.forEach(block => {
    const itemData = {
      vendorName: vendorName,
      item_name: block.querySelector('[name="item_name"]').value,
      rate: block.querySelector('[name="rate"]').value,
      lead_time: block.querySelector('[name="lead_time"]').value,
      payment_terms: block.querySelector('[name="payment_terms"]').value,
      freight: block.querySelector('[name="freight"]').value,
      pnf: block.querySelector('[name="pnf"]').value,
      warranty: block.querySelector('[name="warranty"]').value,
      remarks: block.querySelector('[name="remarks"]').value,
    };
    items.push(itemData);
  });

  const response = await fetch("https://script.google.com/macros/s/AKfycbyh1708TX65CLUeq-BredNxmNtQ_RlBHx-y0DDLeSZ_PeZ1FhmI0Vb6sEBGLDjRTPyAfg/exec", {
    method: "POST",
    body: JSON.stringify({ formType: "vendor", items }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (response.ok) {
    alert("Quote submitted successfully!");
  } else {
    alert("Submission failed.");
  }
});

window.onload = addVendorItem;
