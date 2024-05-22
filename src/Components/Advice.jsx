import "../App.css";

export default function Advice({ firstVisitor, advice }) {
  if (firstVisitor === true) {
    return (
      <div>
        <h1>You want some advice? Look no further.</h1>
        <p>Click the button and get it!</p>
      </div>
    );
  } else {
    return <h1>{advice}</h1>;
  }
}
