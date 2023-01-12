import SynonymFinder from "./components/SynonymFinder";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <SynonymFinder />
      </div>
    </QueryClientProvider>
  );
}

export default App;
