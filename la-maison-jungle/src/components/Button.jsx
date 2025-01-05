// components/Button.js
export default function MyButton({ count, onClick }) {
    return (
      <button onClick={onClick}>
        Click me ({count})
      </button>
    );
  }