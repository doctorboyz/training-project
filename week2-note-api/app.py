from flask import Flask, request, jsonify

app = Flask(__name__)

# ตัวแปรเก็บ note ทั้งหมด (list of dict)
notes = [
    {"id": 1, "title": "First Note", "content": "Hello, this is my first note!"}
]

@app.route('/')
def home():
    return "Welcome to the Note API! Use /notes to get started."

# GET - เรียกดู note ทั้งหมด
@app.route('/notes', methods=['GET'])
def get_notes():
    return jsonify(notes)

# POST - เพิ่ม note ใหม่
@app.route('/notes', methods=['POST'])
def create_note():
    data = request.get_json()
    new_id = notes[-1]['id'] + 1 if notes else 1
    new_note = {
        "id": new_id,
        "title": data.get("title", ""),
        "content": data.get("content", "")
    }
    notes.append(new_note)
    return jsonify(new_note), 201

# PUT - แก้ไข note ตาม ID
@app.route('/notes/<int:note_id>', methods=['PUT'])
def update_note(note_id):
    data = request.get_json()
    for note in notes:
        if note['id'] == note_id:
            note['title'] = data.get("title", note['title'])
            note['content'] = data.get("content", note['content'])
            return jsonify(note)
    return jsonify({"error": "Note not found"}), 404

# DELETE - ลบ note ตาม ID
@app.route('/notes/<int:note_id>', methods=['DELETE'])
def delete_note(note_id):
    global notes
    notes = [note for note in notes if note['id'] != note_id]
    return jsonify({"message": f"Note {note_id} deleted"}), 200

if __name__ == '__main__':
    app.run(debug=True)