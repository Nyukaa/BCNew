const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};
const App = () => {
  console.log("Hello from component");
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
