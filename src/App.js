import Button from "./components/button";
function App() {
  return (
    <div className="App">
      <Button  
        label='bu bir butondur'
        type='button'
        className='btn'
      />
      <Button>
        Test
      </Button>
    </div>
  );
}

export default App;
