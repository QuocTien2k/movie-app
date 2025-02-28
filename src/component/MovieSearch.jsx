import PropTypes from 'prop-types'
import { useContext } from 'react';
import { MovieContext } from './context/MovieProvider';
const MovieSearch = ({ title, dataSearch }) => {
    const { handleUrlTrailer } = useContext(MovieContext);
    return (
        <div className="text-white p-10 mb-10">
            <h2 className="uppercase text-xl mb-4">{title}</h2>
            <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {/* Item */}
                {dataSearch && dataSearch.length > 0 && dataSearch.map((item) => (
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

            </div>
        </div>
    )
}
MovieSearch.propTypes = {
    title: PropTypes.string,
    dataSearch: PropTypes.array
}
export default MovieSearch