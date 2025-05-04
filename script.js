const form = document.getElementById('signup-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');
const surpriseBtn = document.getElementById('surprise-btn');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (!email.value || !password.value) {
    message.textContent = 'Please fill in all fields.';
    message.style.color = 'red';
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    message.textContent = 'Please enter a valid email address.';
    message.style.color = 'red';
    return;
  }

  if (password.value.length < 8) {
    message.textContent = 'Password must be at least 8 characters.';
    message.style.color = 'red';
    return;
  }

  message.textContent = 'Form submitted successfully!';
  message.style.color = 'green';
});


password.addEventListener('input', () => {
  if (password.value.length < 8) {
    password.style.borderColor = 'red';
  } else {
    password.style.borderColor = 'green';
  }
});


const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    alert(`You clicked on ${img.alt}`);
  });
});

const faqItems = document.querySelectorAll('.faq-item');

/*faqItems.forEach(faqItem => {
    const faqHeader = document.querySelector('.faq-header');
    const faqContent = document.querySelector('.faq-content');
    faqHeader.addEventListener('click', () => {    
        faqContent.style.display = faqContent.style.display === 'none' ? 'block' : 'none';
    });
});*/

const faqHeaders = document.querySelectorAll('.faq-header');

faqHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

surpriseBtn.addEventListener('dblclick', () => {
  alert('🎉 You discovered the secret action!');
});


document.addEventListener('keydown', (e) => {
  console.log(`Key pressed: ${e.key}`);
});
