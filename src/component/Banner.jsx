
const Banner = () => {
    return (
        <div className="relative w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover" style={{ backgroundSize: "100% 100%" }}>
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"></div>
            <div className="relative z-20 w-full h-full flex items-center justify-center space-x-[30px] p-4">
                <div className=""><p className="text-white bg-gradient-to-r from-red-600 to-white py-2 px-3">TV Show</p></div>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-white text-3xl">Nghe nói em thích tôi</h2>
                    <div className="flex items-center space-x-3"></div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner