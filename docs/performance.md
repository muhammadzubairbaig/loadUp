# 🚄 Performance

### Code Splitting

Code splitting helps optimize load times by splitting the production JavaScript into smaller chunks. This technique ensures that only the necessary code is loaded initially, and additional code is fetched lazily when required.

It’s recommended to implement code splitting at the route level, so only the core functionality loads first, with additional features loaded only when needed. However, be cautious with excessive code splitting, as it could lead to a performance hit due to too many requests. Strategic splitting that focuses on critical application parts strikes a good balance between performance and resource management.

### Component and state optimizations

- Avoid placing everything into a single global state, as it can trigger unnecessary re-renders. Instead, split the state into smaller, localized states based on where they are used.

- Keep state close to the components that use it. This reduces unnecessary re-renders in components that don’t need updated state.

- For computationally expensive state initialization, use the state initializer function to ensure the function runs only once:

```javascript
// instead of this which would be executed on every re-render:
const [state, setState] = React.useState(myFunc());

// prefer this which is executed only once:
const [state, setState] = React.useState(() => myFunc());
```

If managing large states or requiring fine-grained updates, consider state management libraries like Jotai, which supports atomic updates.

Use React Context cautiously. It's ideal for low-velocity data (like themes or user info), but for high-frequency data, consider using state management libraries such as zustand or jotai with selectors. Also, instead of overusing context, consider lifting state up or employing a proper component composition for better performance.

If your application requires frequent updates or dynamic styling, consider replacing runtime styling solutions like emotion or styled-components with zero-runtime solutions such as TailwindCSS, Vanilla Extract, or CSS Modules that generate styles during build time.

### Children as the most basic optimization

- The children prop can be a simple yet powerful way to optimize components. By using children, you ensure that isolated elements won’t unnecessarily re-render when their parent component updates. Here’s an example:

```javascript
// Not optimized example
const App = () => <Counter />;

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <PureComponent /> // will rerender whenever "count" updates
    </div>
  );
};

const PureComponent = () => <p>Pure Component</p>;

// Optimized example
const App = () => (
  <Counter>
    <PureComponent />
  </Counter>
);

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      {children} // won't rerender whenever "count" updates
    </div>
  );
};

const PureComponent = () => <p>Pure Component</p>;
```

### Image optimizations

Lazy Load images that are outside the viewport to improve page load speed.

Consider using WEBP image format for faster loading and reduced file size.

Use srcset to deliver the most appropriate image based on the client’s screen resolution and size
