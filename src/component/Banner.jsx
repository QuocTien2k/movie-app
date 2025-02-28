import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
    return (
        <div className="relative w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover" style={{ backgroundSize: "100% 100%" }}>
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40"></div>
            <div className="relative z-20 w-full h-full flex items-center justify-center space-x-[30px] p-4">
                {/*Left side */}
                <div className="flex flex-col space-y-5 items-baseline w-[50%]">
                    <p className="text-white bg-gradient-to-r from-red-600 to-red-300 py-2 px-3">TV Show</p>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-white text-[40px] font-bold">Nghe nói em thích tôi</h2>
                        {/* Rating */}
                        <div className="flex items-center space-x-3">
                            <img src={IconRating} alt="rating" className="w-8 h-8" />
                            <img src={IconRating} alt="rating" className="w-8 h-8" />
                            <img src={IconRating} alt="rating" className="w-8 h-8" />
                            <img src={IconRating} alt="rating" className="w-8 h-8" />
                            <img src={IconRatingHalf} alt="rating-half" className="w-8 h-8" />
                        </div>
                        {/* Description */}
                        <p className="text-white">
                            à bộ phim hot nhất nhì màn ảnh Hoa ngữ thời gian gần đây. Phim kể về cô gái Nguyễn Lưu Tranh quay lại thành phố nơi mình lớn lên sau 7 năm, làm bác sĩ bổ túc ở khoa Ngoại thần kinh, bệnh viện Bắc Nhã.
                            Bất ngờ thay, chồng cũ của cô là Ninh Chí Khiêm lại là bác sĩ ưu tú nhất ở đây
                        </p>
                        {/* Button */}
                        <div className="flex items-center space-x-4">
                            <button className="p-3 text-white bg-black font-bold text-sm">Chi tiết</button>
                            <button className="p-3 text-white bg-red-600 font-bold text-sm">Xem phim</button>
                        </div>
                    </div>
                </div>
                {/*Right side */}
                <div className="w-[50%] flex items-center justify-center">
                    <div className="w-[300px] h-[400px] relative group cursor-pointer">
                        <img src={ImgTemp} alt="temp" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                        <img src={IconPlay} alt="play" className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner