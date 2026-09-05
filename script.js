// Typing animation for the hero name — respects prefers-reduced-motion
const nameEl = document.getElementById('typed-name');
const fullText = "Sneha Kumari";
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeName() {
  let i = 0;
  const cursor = '<span class="cursor">_</span>';
  const interval = setInterval(() => {
    i++;
    nameEl.innerHTML = fullText.slice(0, i) + cursor;
    if (i >= fullText.length) clearInterval(interval);
  }, 90);
}

if (prefersReducedMotion) {
  nameEl.innerHTML = fullText + '<span class="cursor">_</span>';
} else {
  typeName();
}

// Copy email to clipboard
const pingBtn = document.getElementById('ping-btn');
pingBtn.addEventListener('click', async () => {
  const email = 'snehak3595@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    pingBtn.textContent = '$ copied: ' + email;
    pingBtn.classList.add('copied');
    setTimeout(() => {
      pingBtn.textContent = '$ copy email --to-clipboard';
      pingBtn.classList.remove('copied');
    }, 2200);
  } catch (err) {
    pingBtn.textContent = email;
  }
});
