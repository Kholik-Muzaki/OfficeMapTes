import Navbar from "../components/Navbar";
import bgImage from "../assets/bg.png";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
    return (
        <>
            <div
                className="h-screen w-full bg-cover bg-center sm:bg-bottom md:bg-top"
                style={{ backgroundImage: `url(${bgImage})` }} // Gambar dari public folder
            >
                <Navbar />
                {/* konten */}
                <div className="h-full flex items-center justify-center px-6 md:px-10">
                    <div className="grid grid-cols-12 w-full">
                        <div className="col-span-12 md:col-span-6 text-center md:text-left">
                            <h2 className="text-5xl sm:text-5xl md:text-6xl font-bold">
                                Lesson and insight <br />
                                <span className="text-red-500">from 8 years</span>
                            </h2>
                            <p className="mt-4 text-sm leading-6 sm:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            </p>

                            {/* Search Bar */}
                            <div className="mt-6">
                                <SearchBar />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard;