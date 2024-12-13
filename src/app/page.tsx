import React from "react";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import TaskList from "./ui/TaskList";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
          <header>
            <Header />
          </header>
          <main className="flex-grow p-6">
            <TaskList />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
    );
};

export default Home;
