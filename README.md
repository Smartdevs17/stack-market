# Stack Market - Frontend Dashboard

This project is a React-based dashboard built with Vite, Tailwind CSS, and the Stacks SDK. It provides a premium interface for interacting with the Stack Market protocol.

## 📁 Architecture & Organization
- `/src/components`: UI components for the **Dutch Auction Marketplace**.
- `/src/utils`: Common utility functions and Stacks SDK wrappers.
- `/src/hooks`: Custom React hooks for network and state management.
- `/src/assets`: Design tokens, global styles, and static assets.

## 🚀 Getting Started
1. **Install Dependencies**: `npm install`
2. **Configure Environment**: Copy `.env.example` to `.env` and add your Stacks private key.
3. **Run Dev Server**: `npm run dev`
4. **Build for Production**: `npm run build`

## 🛠 Features
- **Real-time Monitoring**: Custom hooks for tracking Stacks block height.
- **Contract Interactions**: Seamless integration with `@stacks/connect` for signing transactions.
- **Micro-animations**: Smooth transitions and loading states for a premium feel.
