document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('popup-modal');
    var closeButton = document.querySelector('.close-button');
  
    setTimeout(function () {
      modal.style.display = 'block';
    }, 3000);
  
    closeButton.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });