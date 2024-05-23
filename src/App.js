
import { QueryClient, QueryClientProvider } from 'react-query';
import MainPage from "./pages/MainPage";

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <MainPage/>
        </QueryClientProvider>
    );
}

export default App;