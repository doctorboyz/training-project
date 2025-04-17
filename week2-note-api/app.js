const baseUrl = "https://training-project-3z2a.onrender.com/notes";
const notesDiv = document.getElementById("notes");

// Load all notes
function loadNotes() {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((notes) => {
      notesDiv.innerHTML = "";

      if (!Array.isArray(notes) || notes.length === 0) {
        notesDiv.innerHTML = "<p class='text-muted'>No notes found.</p>";
        return;
      }

      notes.forEach((note) => {
        const col = document.createElement("div");
        col.className = "col-md-6";

        col.innerHTML = `
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${note.title}</h5>
              <p class="card-text">${note.content}</p>
              <button class="btn btn-sm btn-outline-danger" onclick="deleteNote(${note.id})">🗑️ Delete</button>
              <span class="text-muted float-end small">#${note.id}</span>
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

// Add a new note
function addNote() {
  const title = document.getElementById("noteTitle").value.trim();
  const content = document.getElementById("noteContent").value.trim();

  if (!title || !content) {
    alert("Please enter both title and content.");
    return;
  }

  const data = { title, content };

  fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        document.getElementById("noteTitle").value = "";
        document.getElementById("noteContent").value = "";
        loadNotes();
      } else {
        alert("Failed to create note.");
      }
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

// Delete a note
function deleteNote(id) {
  if (!confirm("Are you sure you want to delete this note?")) return;

  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        loadNotes();
      } else {
        alert("Failed to delete note.");
      }
    })
    .catch((err) => {
      console.error("Delete error:", err);
    });
}

// Load notes on page load
document.addEventListener("DOMContentLoaded", loadNotes);
