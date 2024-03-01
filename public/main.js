function slugify(text) {
  return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
}


function deleteProduct(id) {
    const result = confirm(
      'Are you sure you want to delete this product ?'
    );
    if (result) {
      fetch('/delete-product/' + id, {
        method: 'POST',
      }).then((res) => {
        if (res.ok) {
          window.location.href = "/";
        }
      });
    }
  }

  function searchAndScroll(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    
    // Assuming your product names are unique and rendered as part of the row's ID
    const productRows = document.querySelectorAll('tr');

    for (const row of productRows) {
        const productName = row.id;
        if (productName.includes(searchInput)) {
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });
            break; // Break after finding and scrolling to the first match
        }
    }
}
