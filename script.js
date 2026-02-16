const button = document.getElementById('greet-btn');
const welcomeText = document.getElementById('welcome-text');

button.addEventListener('click', () => {
    const names = ['habibi', 'friend', 'guest', 'developer', 'visitor'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    welcomeText.textContent = `Welcome, ${randomName}!`;
});
