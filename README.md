# My-Arabic Learning Platform

A comprehensive Arabic language learning web application inspired by the Madinah Books series. This platform provides an interactive way to study Arabic grammar and vocabulary through structured chapters and lessons.

## 🎯 Project Overview

**My-Arabic.com** aims to provide a full in-depth Arabic grammar and vocabulary course. It is inspired by Br. Asif's lessons on YouTube, which are based on the three Madinah Books by Dr. V. Abdur Raheem. This site compiles these works into a single user-friendly and interactive web-course.

## 🏗️ Architecture

This is a full-stack application with:
- **Frontend**: React + TypeScript + Vite
- **Backend**: ASP.NET Core 9.0 Web API
- **Database**: PostgreSQL
- **Styling**: TailwindCSS + Custom CSS variables

## ✨ Features

### Content Management
- **Chapter Management**: Create, edit, and organize course chapters
- **Lesson Management**: Structured lessons within chapters with MDX support
- **Content Editor**: Rich text editing with MDX for interactive content
- **Drag & Drop Reordering**: Intuitive course structure management

### User Experience
- **Command Palette**: Quick navigation with `Cmd/Ctrl+K`
- **Keyboard Navigation**: Arrow keys for page navigation
- **Responsive Design**: Mobile-friendly interface
- **Dark/Light Theme**: Adaptive UI theming
- **Interactive Quizzes**: Built-in quiz components for learning assessment

### Navigation & Search
- **Hierarchical Navigation**: Chapter-based sidebar with expandable lessons
- **Route-based Search**: Find chapters and lessons quickly
- **Page Navigation**: Previous/next navigation between content

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **TanStack Router** for routing
- **TanStack Query** for API data management
- **Formik** for form handling
- **Axios** for HTTP requests
- **Lucide React** for icons
- **@dnd-kit** for drag-and-drop functionality
- **TailwindCSS** for styling

### Backend
- **ASP.NET Core 9.0** Web API
- **Entity Framework Core** with PostgreSQL
- **JWT Authentication** with API key security
- **CORS** enabled for cross-origin requests
- **OpenAPI/Swagger** documentation

### Database Schema
- **Chapters**: Title, slug, content, order, timestamps
- **Lessons**: Title, slug, content, order, chapter relationship, timestamps
- **Hierarchical Structure**: Chapters contain multiple lessons

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [.NET 9.0 SDK](https://dotnet.microsoft.com/download)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-arabic-v2
   ```

2. **Frontend Setup:**
   ```bash
   npm install
   npm run dev
   ```

3. **Backend Setup:**
   ```bash
   cd server
   dotnet restore
   dotnet run
   ```

4. **Database Setup:**
   - Ensure PostgreSQL is running
   - Update connection string in `appsettings.json`
   - Database migrations run automatically on startup

### Environment Variables

Create a `.env` file in the root directory:
```env
API_BASE_URL=http://localhost:5192
```

## 📚 Usage

### For Learners
- Navigate through chapters using the sidebar
- Complete lessons in order using keyboard navigation (←/→)
- Take interactive quizzes embedded in lessons
- Use the command palette (`Cmd/Ctrl+K`) for quick navigation

### For Content Creators
- Login to access editing features
- Create new chapters and lessons
- Use the MDX editor for rich content creation
- Reorder content using the drag-and-drop course editor
- Add interactive quiz components to lessons

### Keyboard Shortcuts
- `Cmd/Ctrl+K` - Open command palette
- `←/→` - Navigate between pages
- `Cmd/Ctrl+C` - Add new chapter (when logged in)
- `Cmd/Ctrl+L` - Add new lesson (when logged in)

## 🏛️ Project Structure

```
my-arabic-v2/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── quiz/           # Quiz components
│   │   ├── mdx/            # MDX editor components
│   │   └── courseReordering/ # Drag-and-drop functionality
│   ├── pages/              # Page components
│   ├── queries/            # API queries and mutations
│   ├── provider/           # Context providers
│   └── Layouts/            # Layout components
└── server/
    ├── Features/           # Feature-based organization
    │   ├── Chapters/       # Chapter CRUD operations
    │   ├── Lessons/        # Lesson CRUD operations
    │   └── Reorder/        # Content reordering
    ├── DataAccess/         # Database context and repositories
    └── Models/             # Entity models
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is inspired by educational content from the Madinah Books series and aims to make Arabic learning more accessible through modern web technologies.

## 🙏 Acknowledgments

- Dr. V. Abdur Raheem for the Madinah Books series
- Br. Asif for the YouTube lessons that inspired this platform
- The Arabic learning community for their continued support

