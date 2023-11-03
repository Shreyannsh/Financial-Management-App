import "./loader.css";

function Loader(props) {
  if (!props.loading) {
    return null;
  }
  return (
    <div className="parent">
      <img
        className="loader"
        src="https://media4.giphy.com/media/FgH5xSNjGHZsiYPWAX/giphy.gif?cid=6c09b952hk46i399xpf4mfofwpvp5tpsltgg28j7qnq0temg&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
        alt="loading"
      />
    </div>
  );
}

export default Loader;
