import PropTypes from "prop-types"
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from "./context/MovieProvider";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

const MovieList = ({ title, data }) => {
    const { handleUrlTrailer } = useContext(MovieContext);

    return (
        <div className='text-white p-10 mb-10'>
            <h2 className="uppercase text-xl mb-4">{title}</h2>
            <Carousel
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                transitionDuration={500}
                responsive={responsive}
                className="flex items-center">
                {/* Item */}
                {data && data.length > 0 && data.map((item) => (
                    <div key={item.id} className="w-[200px] h-[300px] relative group" onClick={() => handleUrlTrailer(item.id)}>
                        <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
                            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                            <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute bottom-4 left-0 w-full text-center">
                                <p className="uppercase text-[16px]">{item.title || item.original_title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

MovieList.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}

export default MovieList