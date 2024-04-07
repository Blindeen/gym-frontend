import { ChakraProvider } from '@chakra-ui/react';

import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
    return (
        <ChakraProvider>
            <LandingPage />
        </ChakraProvider>
    );
}

export default App;
