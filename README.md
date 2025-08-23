# NDDB Publications Admin Panel

A modern, responsive admin panel for managing NDDB publications with Material-UI components and dynamic form handling.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd newNDS
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   ```bash
   # Copy environment example file
   cp env.example .env

   # Edit .env file with your configuration
   VITE_API_BASE_URL=https://nddb-backend.onrender.com
   VITE_CREATE_PUBLICATIONS_ENDPOINT=/createPublications
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🌟 Features

- **Dynamic Publication Forms**: HR Compliances, Annual Reports, Policies
- **File Upload Support**: PDF documents and image thumbnails
- **Responsive Design**: Works on all devices
- **Dark/Light Theme**: Toggle between themes
- **Advanced Filtering**: Search and filter publications
- **API Integration**: Backend integration with NDDB API

## 📁 Project Structure

```
src/
├── AdminComponents/          # Admin panel components
│   ├── AdminPublication.jsx      # Main publications page
│   ├── AdminPublicationForm.jsx  # Publication creation form
│   └── AdminSidebar.jsx          # Navigation sidebar
├── Api/                     # API functions
│   └── Api.jsx                 # HTTP request functions
└── assets/                  # Static assets
```

## 🔧 Configuration

### Environment Variables

| Variable                            | Description                    | Default                             |
| ----------------------------------- | ------------------------------ | ----------------------------------- |
| `VITE_API_BASE_URL`                 | Backend API base URL           | `https://nddb-backend.onrender.com` |
| `VITE_CREATE_PUBLICATIONS_ENDPOINT` | Publications creation endpoint | `/createPublications`               |

## 📱 Usage

1. **Create Publication**: Click "Create +" button
2. **Select Type**: Choose from HR Compliances, Annual Reports, or Policies
3. **Fill Form**: Complete required fields based on publication type
4. **Upload Files**: Add PDF documents and thumbnails
5. **Submit**: Form will send data to backend API

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Tech Stack

- **Frontend**: React 18, Vite
- **UI Library**: Material-UI (MUI)
- **HTTP Client**: Axios
- **Styling**: CSS-in-JS with MUI System

## 📄 License

This project is licensed under the MIT License.
