# PopX - Social Media Platform

A modern, responsive social media platform built with React and Tailwind CSS where users can share their thoughts and ideas with the world.

## 🌟 Features

- **User Authentication**: Complete signup and login system
- **Profile Management**: Editable user profiles with bio, location, and website
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- **Local Storage**: Persistent user data storage
- **Dynamic Navigation**: Context-aware navigation based on user state

## 🚀 Live Demo

Check out the live demo: [PopX](https://pop-x-teal.vercel.app/)

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM 7.6.2
- **Icons**: React Icons 5.5.0
- **Build Tool**: Vite 6.3.5
- **Deployment**: GitHub Pages

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher)
- **Git** (for version control)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Akhil07-ctrl/Pop-X.git
   ```

2. **Navigate to the client directory**
   ```bash
   cd client
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📁 Project Structure

```
PopX/
├── client/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── welcome.jsx      # Landing page component
│   │   │   ├── login.jsx        # Login form component
│   │   │   ├── signUp.jsx       # Registration form component
│   │   │   └── profile.jsx      # User profile component
│   │   ├── App.css              # Global styles
│   │   ├── App.jsx              # Main app component with routing
│   │   ├── index.css            # Tailwind CSS imports
│   │   └── main.jsx             # React app entry point
│   ├── eslint.config.js         # ESLint configuration
│   ├── index.html               # HTML template
│   ├── package.json             # Dependencies and scripts
│   ├── postcss.config.js        # PostCSS configuration
│   ├── tailwind.config.js       # Tailwind CSS configuration
│   └── vite.config.js           # Vite configuration
└── README.md                    # Project documentation
```

## 🎯 Usage

### Creating an Account

1. Visit the welcome page
2. Click "Create Account"
3. Fill in the registration form:
   - Full Name (required)
   - Phone Number (required)
   - Email Address (required)
   - Password (required)
   - Company Name (optional)
   - Agency status (required)
4. Click "Create Account"
5. You'll be redirected to the login page after successful registration

### Logging In

1. From the welcome page, click "Login"
2. Enter your credentials:
   - Username (optional - will use email prefix if not provided)
   - Email Address (required)
   - Password (required)
3. Click "Login"
4. You'll be redirected to your profile page

### Managing Your Profile

1. After logging in, you'll see your profile page
2. Click the edit icon (pencil) to edit your profile
3. Update your information:
   - Name
   - Email
   - Bio
   - Location
   - Website
4. Click the save icon to save changes or cancel icon to discard

### Navigation

- **Home Button**: Returns to the welcome page
- **Profile Button**: Access your profile (when logged in)
- **Logout Button**: Sign out and return to welcome page
- **Back Buttons**: Navigate to previous pages

## 🎨 Customization

### Tailwind CSS Configuration

The project uses Tailwind CSS v4 with a custom configuration. You can modify the styling by:

1. **Editing `tailwind.config.js`** for theme customization
2. **Modifying component styles** directly in JSX files
3. **Adding custom CSS** in `App.css` or `index.css`

### Color Scheme

The app uses a violet-based color scheme:
- Primary: `violet-600` (#7c3aed)
- Secondary: `violet-200` (#ddd6fe)
- Accent: `purple-600` (#9333ea)

### Adding New Components

1. Create a new file in `src/components/`
2. Import and use in `App.jsx`
3. Add routing if needed in the `Routes` section

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)
- **Large screens** (1280px and up)

## 🔒 Data Storage

Currently, the app uses **localStorage** for data persistence:

- **User profiles**: Stored as JSON in `currentUser` key
- **Registered users**: Stored as array in `registeredUsers` key
- **Session management**: Automatic login state detection

> **Note**: In a production environment, you would replace localStorage with a proper backend database and authentication system.

## 🚀 Deployment

### GitHub Pages Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your hosting provider

## 📜 Available Scripts

In the client directory, you can run:

- **`npm run dev`** - Starts the development server
- **`npm run build`** - Builds the app for production
- **`npm run preview`** - Preview the production build locally
- **`npm run deploy`** - Deploy to GitHub Pages
- **`npm run lint`** - Run ESLint for code quality

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow React best practices
- Use functional components with hooks
- Maintain consistent code formatting
- Write descriptive commit messages
- Test your changes thoroughly

## 🐛 Known Issues

- Profile image upload is not yet implemented
- No backend integration (uses localStorage)
- Limited form validation
- No password reset functionality

## 🔮 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time messaging
- [ ] Post creation and sharing
- [ ] Image upload functionality
- [ ] Advanced user search
- [ ] Email verification
- [ ] Password reset
- [ ] Dark mode support
- [ ] Push notifications
- [ ] Social media integrations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kundena Akhil**
- Website: [Personal Portfolio](https://portfolio-nine-flax-29.vercel.app/)
- GitHub: [@Akhil07-ctrl](https://github.com/Akhil07-ctrl)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/kundena-akhil-4b7073170/)
- Email: akhilkundena@gmail.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Vite](https://vitejs.dev/) - Build tool
- [React Router](https://reactrouter.com/) - For routing
- [React Icons](https://react-icons.github.io/react-icons/) - For icons

## 📞 Support

If you have any questions or need help with the project:

1. **Check the documentation** above
2. **Search existing issues** on GitHub
3. **Create a new issue** if you can't find a solution
4. **Contact the maintainer** via email

---

**Made with ❤️ and React**