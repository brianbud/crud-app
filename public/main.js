const update = document.querySelector('#update-button');
const deleteButton = document.querySelector('#delete-button');

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
      window.location.reload(true);
    });
});

deleteButton.addEventListener('click', (_) => {
  fetch('quotes', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Test Name',
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((data) => {
      window.location.reload();
    });
});
