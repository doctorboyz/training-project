```markdown
# 📝 Note API – Week 2 Project

A simple Flask-based REST API that lets you create, read, update, and delete notes.  
Built as part of the **AI-Powered Developer Roadmap**.

📁 GitHub Repo: [doctorboyz/training-project](https://github.com/doctorboyz/training-project)

---

## 🚀 Project Features

- CRUD operations for notes (stored in memory)
- Tested using Postman
- Easy to extend with database or AI features
- Clean, lightweight Flask app for learning API development

---

## 📂 How to Run It Locally

1. Clone this repo:

```bash
git clone https://github.com/doctorboyz/training-project.git
cd training-project/week2-note-api
```

2. (Optional) Create a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:

```bash
pip install flask
```

4. Run the server:

```bash
python app.py
```

5. Open Postman or browser and go to:

```
http://localhost:5000/notes
```

---

## 📌 API Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`    | `/notes`               | Get all notes |
| `GET`    | `/notes/<id>`          | Get note by ID |
| `POST`   | `/notes`               | Create new note |
| `PUT`    | `/notes/<id>`          | Update note by ID |
| `DELETE` | `/notes/<id>`          | Delete note by ID |

---

## 📬 Example API Usage

### 📤 Create a New Note (POST `/notes`)

```json
{
  "title": "Meeting Notes",
  "content": "Summary of Q2 strategy and goals."
}
```

### ✅ Response:
```json
{
  "id": 2,
  "title": "Meeting Notes",
  "content": "Summary of Q2 strategy and goals."
}
```

---

## 🛠 Tech Stack

- **Backend:** Python + Flask
- **Testing:** Postman
- **Environment:** Localhost (127.0.0.1)
- *(No database yet – notes stored in-memory)*

---

## 📎 Notes

> This app is part of a self-paced learning journey.  
> You can extend it by:
- Adding SQLite/PostgreSQL
- Connecting to OpenAI API for auto-summary
- Deploying with Render.com

---

## 👨‍⚕️ Author

> **Adisorn Sirisunhirun**  
> GitHub: [doctorboyz](https://github.com/doctorboyz)
