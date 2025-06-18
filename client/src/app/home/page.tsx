import Header from "./Header";
import Sidebar from "./Sidebar";
import "./index.css";


const Home = () => {
    return (
        <div className="relative">
            <div className="absolute left-0 top-0 w-[72px] min-h-screen bg-[var(--login-screen-main-color)]">
                <Sidebar />
            </div>
            <header className="relative w-[calc(100vw-72px)] bg-red-500 left-[72px]">
                <Header />

            </header>
        </div>
    )
}

export default Home;