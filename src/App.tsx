import './App.css'

const App: React.FC = () => {
  let greeting: string = "Hello, TypeScript!";

  let numberList: number[] = [5, 10, 15];

  function calculateSum(a: number, b: number): number {
    return a + b;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <p>Number List: {numberList.join(', ')}</p>
      <p>Sum of 5 and 10: {calculateSum(5, 10)}</p>
    </div>
  );
}

export default App;