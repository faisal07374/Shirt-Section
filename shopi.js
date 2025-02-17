// // Product variants (mock data)
// const productVariants = {
//   red: {
//     small: { price: 5000, originalPrice: 5600, discount: 20, savinginfo: 600.00 },
//     medium: { price: 5200, originalPrice: 5800, discount: 15, savinginfo: 700.00 },
//     large: { price: 5400, originalPrice: 6000, discount: 10, savinginfo: 800.00 }
//   },
//   blue: {
//     small: { price: 5100, originalPrice: 5700, discount: 20 },
//     medium: { price: 5300, originalPrice: 5900, discount: 15 },
//     large: { price: 5500, originalPrice: 6100, discount: 10 }
//   }
// };

// // Function to update pricing dynamically
// function updatePricing(color, size) {
//   const variant = productVariants[color][size];
//   const priceElement = document.getElementById('product-price');
//   const cutoffPriceElement = document.getElementById('cutoff-price');
//   const savingElement = document.getElementById('saving-info');
//   const discountElement = document.getElementById('discount-info');

//   const price = variant.price;
//   const originalPrice = variant.originalPrice;
//   const discount = variant.discount;
//   const saving = originalPrice - price;

//   // Update price display
//   priceElement.textContent = `Rs.${price}.00`;
//   cutoffPriceElement.innerHTML = `<s>Rs.${originalPrice}.00</s>`;
//   savingElement.textContent = `Save Rs.${saving}.00`;
//   discountElement.textContent = `(${discount}% off)`;
// }

// // Color and size selection event handlers
// const colorOptions = document.getElementsByClassName('color-option');
// for (let i = 0; i < colorOptions.length; i++) {
//   colorOptions[i].addEventListener('click', (e) => {
//     const color = e.target.closest('.color-option').querySelector('img').dataset.color;
//     const size = document.getElementsByClassName('size-option active')[0]?.dataset.size || 'large';

//     // Change image and update pricing
//     for (let j = 0; j < colorOptions.length; j++) {
//       colorOptions[j].classList.remove('active');
//     }
//     e.target.closest('.color-option').classList.add('active');

//     updatePricing(color, size);
//   });
// }

// const sizeOptions = document.getElementsByClassName('size-option');
// for (let i = 0; i < sizeOptions.length; i++) {
//   sizeOptions[i].addEventListener('click', (e) => {
//     const size = e.target.dataset.size;
//     const color = document.getElementsByClassName('color-option active')[0]?.querySelector('img').dataset.color || 'blue';

//     // Update size selection UI and pricing
//     for (let j = 0; j < sizeOptions.length; j++) {
//       sizeOptions[j].classList.remove('active');
//     }
//     e.target.classList.add('active');

//     updatePricing(color, size);
//   });
// }

// updatePricing('blue', 'large');


// //  JS FOR images color updation :

// document.querySelectorAll('.color-option').forEach(item => {
//   item.addEventListener('click', (e) => {
//     let color = e.target.getAttribute('data-color');

//     // Hide all product images
//     document.querySelectorAll('.product-image').forEach(img => {
//       img.style.display = 'none';
//     });

//     // Show the selected color product images
//     document.querySelectorAll('.product-image.' + color).forEach(img => {
//       img.style.display = 'block';
//     });

//     // Change the main product image based on the selected color
//     let mainProductImg = document.getElementById('main-product-img');
//     let newSrc = document.querySelector('.product-image.' + color).src;
//     mainProductImg.src = newSrc;
//   });
// });

// function updatePricingInfo() {
//   const productPrice = parseFloat(document.getElementById('product-price').innerText.replace('Rs.', '').replace(',', ''));
//   const cutoffPrice = parseFloat(document.getElementById('cutoff-price').innerText.replace('Rs.', '').replace(',', '').replace('<s>', '').replace('</s>', ''));

//   if (!isNaN(productPrice) && !isNaN(cutoffPrice)) {
//     // Calculate saving
//     const saving = cutoffPrice - productPrice;

//     // Calculate discount percentage
//     const discountPercentage = (saving / cutoffPrice) * 100;

//     // Update saving and discount info
//     document.getElementById('saving-info').innerText = `Save Rs.${saving.toFixed(2)}`;
//     document.getElementById('discount-info').innerText = `(${discountPercentage.toFixed(0)}% off)`;
//   }
// }

// // Call the function to initialize
// updatePricingInfo();


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
