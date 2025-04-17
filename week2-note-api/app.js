const baseUrl = "https://training-project-3z2a.onrender.com/notes";
const notesDiv = document.getElementById("notes");

function loadNotes() {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((notes) => {
      if (!Array.isArray(notes)) {
        notesDiv.innerHTML = `<p class="text-danger">Error: Invalid response from API</p>`;
        return;
      }

      notesDiv.innerHTML = "";

      notes.forEach((note) => {
        const col = document.createElement("div");
        col.className = "col-md-6";

        col.innerHTML = `
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${note.title}</h5>
              <p class="card-text">${note.content}</p>
              <span class="text-muted small">Note ID: ${note.id}</span>
            </div>
          </div>
        `;

        notesDiv.appendChild(col);
      });
    })
    .catch((err) => {
      console.error("Failed to load notes:", err);
      notesDiv.innerHTML = `<p class="text-danger">Failed to connect to the API.</p>`;
    });
}

document.addEventListener("DOMContentLoaded", loadNotes);
