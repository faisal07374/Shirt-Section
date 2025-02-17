//  JS FOR images color updation :

document.querySelectorAll('.color-option').forEach(item => {
  item.addEventListener('click', (e) => {
    let color = e.target.getAttribute('data-color');

    // Hide all product images
    document.querySelectorAll('.product-image').forEach(img => {
      img.style.display = 'none';
    });

    // Show the selected color product images
    document.querySelectorAll('.product-image.' + color).forEach(img => {
      img.style.display = 'block';
    });

    // Change the main product image based on the selected color
    let mainProductImg = document.getElementById('main-product-img');
    let newSrc = document.querySelector('.product-image.' + color).src;
    mainProductImg.src = newSrc;
  });
});

// JS for default color and size selection 

document.querySelectorAll('.color-option').forEach(option => {
  option.addEventListener('click', function () {
    document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
    this.classList.add('selected');
    document.querySelector('label[for="color"] strong').textContent = this.querySelector('p').textContent;
  });
});

document.querySelectorAll('.size-option').forEach(option => {
  option.addEventListener('click', function () {
    document.querySelectorAll('.size-option').forEach(o => o.classList.remove('selected'));
    this.classList.add('selected');
    document.querySelector('label[for="size"] strong').textContent = this.textContent;
  });
});


// JS for original price from selected size

const sizeOptions = document.querySelectorAll('.size-option');

function updatePrice(sizeButton) {
  const newPrice = sizeButton.getAttribute('data-price');

  document.getElementById('product-price').textContent = `Rs.${newPrice}`;

  sizeOptions.forEach(option => option.classList.remove('selected'));
  sizeButton.classList.add('selected');
}

sizeOptions.forEach(button => {
  button.addEventListener('click', () => {
    updatePrice(button);
  });
});

// JS for giving discount from original price

// Get all size option buttons
// const sizeOptions = document.querySelectorAll('.size-option');

// // Function to update price and discount based on selected size
// function updatePriceAndDiscount(sizeButton) {
//   // Get the original price from the data-price attribute
//   const originalPrice = parseFloat(sizeButton.getAttribute('data-price').replace(",", ""));

//   // Get the discount rate from the data-discount attribute
//   const discountRate = parseFloat(sizeButton.getAttribute('data-discount')) || 0;

//   // Calculate the discounted price
//   const discountedPrice = originalPrice * (1 - discountRate);

//   // Update the product price with the discounted price
//   document.getElementById('product-price').textContent = `Rs.${discountedPrice.toFixed(2)}`;

//   // Update the discount info text
//   document.getElementById('discount-info').textContent = `(${(discountRate * 100).toFixed(0)}% off) - Rs.${(originalPrice - discountedPrice).toFixed(2)} discount`;

//   // Remove selected class from all size options
//   sizeOptions.forEach(option => option.classList.remove('selected'));

//   // Add selected class to the clicked size option
//   sizeButton.classList.add('selected');
// }

// // Attach the event listener to all size options
// sizeOptions.forEach(button => {
//   button.addEventListener('click', () => {
//     updatePriceAndDiscount(button);
//   });
// });
