# Module Federation with React Example

This project demonstrates Webpack 5's Module Federation feature with React applications. It consists of two separate applications:

1. **Host Application**: Consumes components from the remote application
2. **Remote Application**: Exposes components to be used by the host application

## Project Structure

```
module-federation-poc/
├── host/                 # Host application
│   ├── src/
│   │   ├── components/
│   │   ├── App.js        # Main host application
│   │   ├── App.css
│   │   ├── bootstrap.js  # Entry point wrapper
│   │   ├── index.js      # Dynamic import of bootstrap
│   │   └── index.html    # HTML template
│   ├── package.json
│   └── webpack.config.js # Host webpack config with Module Federation
│
└── remote/               # Remote application
    ├── src/
    │   ├── components/
    │   │   ├── Button.js   # Exposed component
    │   │   ├── Button.css
    │   │   ├── Header.js   # Exposed component
    │   │   └── Header.css
    │   ├── App.js        # Main remote application
    │   ├── bootstrap.js  # Entry point wrapper
    │   ├── index.js      # Dynamic import of bootstrap
    │   └── index.html    # HTML template
    ├── package.json
    └── webpack.config.js # Remote webpack config with Module Federation
```

## How It Works

### Module Federation Configuration

#### Remote Application

The remote application exposes components through the ModuleFederationPlugin in webpack.config.js:

```js
new ModuleFederationPlugin({
  name: 'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './Button': './src/components/Button',
    './Header': './src/components/Header',
  },
  shared: {
    react: { singleton: true, requiredVersion: '^17.0.2' },
    'react-dom': { singleton: true, requiredVersion: '^17.0.2' },
  },
})
```

#### Host Application

The host application consumes the exposed components through the ModuleFederationPlugin in webpack.config.js:

```js
new ModuleFederationPlugin({
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:3001/remoteEntry.js',
  },
  shared: {
    react: { singleton: true, requiredVersion: '^17.0.2' },
    'react-dom': { singleton: true, requiredVersion: '^17.0.2' },
  },
})
```

In the host application's App.js, the remote components are dynamically imported using React.lazy:

```jsx
const RemoteButton = React.lazy(() => import('remote/Button'));
const RemoteHeader = React.lazy(() => import('remote/Header'));
```

## Running the Example

1. Install dependencies for both applications:

```bash
# Install dependencies for the host application
cd host
npm install

# Install dependencies for the remote application
cd ../remote
npm install
```

2. Start both applications:

```bash
# In one terminal, start the remote application
cd remote
npm start

# In another terminal, start the host application
cd host
npm start
```

3. Open your browser:
   - Remote application: http://localhost:3001
   - Host application: http://localhost:3002

## Key Concepts

1. **Module Federation**: Allows JavaScript applications to dynamically load code from another application at runtime.

2. **Host and Remote**: In Module Federation terminology, a "host" consumes code from a "remote" application.

3. **Shared Dependencies**: Both applications share the same React and ReactDOM instances, avoiding duplicate libraries and ensuring compatibility.

4. **Dynamic Imports**: Components are loaded asynchronously using React.lazy and Suspense.

5. **Separate Builds**: Each application has its own build process and can be deployed independently.

## Benefits

- **Micro-Frontend Architecture**: Enables independent teams to work on separate applications.
- **Code Sharing**: Reduces duplication by sharing components across applications.
- **Independent Deployment**: Applications can be deployed separately without affecting each other.
- **Runtime Integration**: Components are loaded at runtime, not build time.
