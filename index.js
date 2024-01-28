document.getElementById('issueForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const priority = document.getElementById('priority').value;
  const file = document.getElementById('fileUpload').files[0]; // For simplicity, considering only one file

  const issueItem = document.createElement('li');
  issueItem.innerHTML = `
    <strong>${title}</strong> - Priority: ${priority}<br>
    ${description}
  `;

  if (file) {
    const fileLink = document.createElement('a');
    fileLink.setAttribute('href', '#'); // Replace '#' with actual file URL or attachment functionality
    fileLink.textContent = `Attachment: ${file.name}`;
    issueItem.appendChild(document.createElement('br'));
    issueItem.appendChild(fileLink);
  }

  document.getElementById('issues').appendChild(issueItem);

  // Clear form fields after submission
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('priority').value = 'low';
  document.getElementById('fileUpload').value = '';
});
