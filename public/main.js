const update = document.querySelector('#update-button');

update.addEventListener('click', (_) => {
  fetch('/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Test Name',
      quote: 'This is from main.js',
    }),
  })
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((response) => {
      console.log(response);
    });
});
