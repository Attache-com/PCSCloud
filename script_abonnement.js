document.getElementById('paymentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var cardNumber = document.getElementById('cardNumber').value.trim();
  var cardName = document.getElementById('cardName').value.trim();
  var expiryDate = document.getElementById('expiryDate').value.trim();
  var cvv = document.getElementById('cvv').value.trim();

  // Basic validation
  if (cardNumber === '' || cardName === '' || expiryDate === '' || cvv === '') {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }

  // You can implement further validation for card details here

  // Simulate payment processing (replace with actual payment processing logic)
  setTimeout(function() {
    document.getElementById('paymentStatus').innerText = 'Problème de conexion ! verifier votre numero de carte....';
    // Optionally, you can redirect to a success page or perform other actions
  }, 2000); // Simulate a 2 second processing time
});