### 🚀 Next.js App Setup + Shadcn UI Component Integration
- ⚙️ API Gateway with Node.js Microservices (Upload, Design, Subscription)
- 🔐 Auth.js Integration (NextAuth v5) with API token forwarding via middleware
- 📁 Modular Service Architecture for scalable backend logic
- 💾 MongoDB as the database for all services

### 🖼️ Powerful Canvas Editor with Fabric.js
- ✨ Add & Manipulate Shapes, Text, Drawings, and Images
- 🎯 Full Sidebar UI: Shapes, Uploads, Text, Draw, AI Panel
- ⚡ Smart Shape Factory & Custom Property Editor
- 🔒 Canvas Lock/Unlock Mode for focused editing
- 🔄 Real-Time Auto Save + Load Designs Seamlessly

### 🧠 AI Image Generation Panel using external API
- 📤 Cloud Image Uploads with preview & Canvas integration
- 📥 Upload Service with Cloudinary Integration
- 📚 Organized client-side services, stores & utilities with Zustand

### 💎 Premium Membership Flow
- 💳 Paypal Subscription Integration
- 🚫 Limit Free Users to 5 Designs + AI Feature Gating
- 📊 Design History, Billing Info & Upgrade Dialogs
- 🗑️ Delete Design Projects Directly from Dashboard

### 📦 Export your designs as PNG, SVG, JPG, or JSON
### 🧠 Responsive UI built with TailwindCSS + Shadcn UI

## Packages:
- Client
    - npx shadcn@latest add button input dialog label select slider switch tab
    - npm i axios fabric file-saver jspdf lodash uuid @reduxjs/toolkit react-redux next-auth@beta

- Backend
    - api-gateway(micro-service)
        - npm i express cors dotenv express-http-proxy google-auth-library helmet jsonwebtoken nodemon
    - upload-service 
        - npm i cloudinary cors dotenv express helmet jsonwebtoken mongoose nodemon multer
    - design-service
        - npm i cors dotenv express helmet jsonwebtoken mongoose nodemon axios
    - subscription-service
        - npm i express dotenv helmet nodemon mongoose 