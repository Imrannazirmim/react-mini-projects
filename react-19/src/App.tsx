import Theme from "./components/Theme.tsx";
import Form from "./components/Form.tsx";
import AdvanceForm from "./components/AdvanceForm.tsx";
import Counter from "./components/Counter.tsx";
import Tabs from "./components/Tabs.tsx";

const App = () => {
  return (
    <>
      {/*<Suspense>*/}
      {/*  <Todo />*/}
      {/*</Suspense>*/}
      <Theme />
      <Form />
      <AdvanceForm/>
      <Counter/>
      <Tabs/>
    </>
  );
};

export default App;
