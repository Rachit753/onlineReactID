# CipherStudio Frontend

The **frontend** of CipherStudio is a **React-based online IDE** that allows users to write, edit, and preview React code in real-time — directly in their browser.  
It uses **@codesandbox/sandpack-react** to provide an embedded coding and preview environment, along with a custom-built file explorer and local project storage.

---

## Overview

The frontend provides:

- A **Code Editor** for writing code.
- A **File Manager** to manage project files.
- A **Live Preview** window to instantly see code output.
- **Project saving and loading** via `localStorage`.

This setup emulates the basic functionality of an online IDE like CodeSandbox, built entirely with React.

---

## Tech Stack

- **React.js** – Core framework  
- **@codesandbox/sandpack-react** – Embeddable code editor & preview  
- **CSS (Vanilla)** – Styling and layout  
- **LocalStorage** – Project persistence  

---

## Project Structure

frontend/
│
├── src/
│ ├── components/
│ │ ├── CodeEditor.js # Sandpack-based code editor component
│ │ ├── FileManager.js # Handles adding, deleting, and displaying files
│ │ ├── LivePreview.js # Real-time React output preview panel
│ │ └── ProjectSaver.js # (Optional) Component to manage project IDs
│ │
│ ├── App.js # Main component combining all sections (editor, preview, file manager)
│ ├── index.js # React entry point rendering App
│ └── styles.css # Layout and styling for IDE
│
├── package.json
└── README.md

---

## Component Breakdown

### **1. App.js**

- Main container for the IDE interface.
- Sets up `SandpackProvider` with default files.
- Handles:
  - Project loading & saving in `localStorage`
  - File creation/deletion
  - Generating new project IDs
- Layout divided into:
  - Header (title, project ID controls)
  - IDE Grid (FileManager | CodeEditor | LivePreview)

---

### **2. FileManager.js**

- Displays the list of files in the project.
- Allows:
  - Adding new files (`/Component.js`)
  - Deleting existing files
- Syncs changes with Sandpack via:

  ```js
  sandpack.updateFile(filePath, '');
  sandpack.deleteFile(filePath);

Acts as a File Explorer in the IDE.

### **3. CodeEditor.js**

Uses SandpackCodeEditor from @codesandbox/sandpack-react.

Supports:

Tabs for multiple files

Line numbers

Allows users to write or modify code which reflects instantly in the preview.

### **4. LivePreview.js**

Uses SandpackPreview to render the current project in real-time.

Displays compiled React app output instantly.

showOpenInCodeSandbox is disabled to keep it minimal.

### **5. ProjectSaver.js**

(Optional) Component to load or create a new project by ID.

Generates random project IDs and manages them in state.

Useful for switching between multiple saved projects.

### **6. styles.css**

Defines the three-panel layout:

Left: File Explorer

Center: Code Editor

Right: Live Preview

Uses a dark theme for editor and file explorer.

Responsive for smaller screens (stacks vertically).

## Features Summary

Feature Description
 Code Editor Write & edit React code live
 File Explorer Add, delete, and view project files
 Live Preview Instantly renders your app output
 Local Storage Saves files and project state persistently
 Project Switching Load or create new projects using IDs
 Responsive Design Adapts to tablets and smaller screens
 Run the Frontend

1. Install Dependencies
npm install
2. Start Development Server
npm start
The app will be live at <http://localhost:3000>

## Future Enhancements

Switch between active files dynamically

Add syntax theme selection (light/dark)

Implement file renaming

Enable project sharing via cloud backend

Add integrated console/output panel

## License

This project is open-source and licensed under the MIT License.

Developed by Rachit Chauhan
“Learn. Code. Preview.” — CipherStudio
