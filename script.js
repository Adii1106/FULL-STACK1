document.getElementById('getMessageBtn').addEventListener('click', async () => {
  const response = await fetch('/api/message');
  const data = await response.json();
  document.getElementById('message').innerText = data.message;
});
