import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import UserList from './components/Userlist.jsx';

function App() {

    return (
        <>
            <Header />
            <main className="main">
                <UserList />
            </main>
            <Footer />
        </>
    )
}

export default App
