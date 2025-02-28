import { createContext, useState } from "react";
import ReactModal from "react-modal";
import YouTube from "react-youtube";
import PropTypes from "prop-types";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState('');

    const handleUrlTrailer = async (id) => {
        setTrailerKey('');
        try {
            const url_trailer = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            };
            const res = await fetch(url_trailer, options);
            const data = await res.json();

            setTrailerKey(data.results[0].key);
            setModalIsOpen(true);
        } catch (error) {
            console.log(error)
            setModalIsOpen(false);
        }
    }

    const customStyles = {
        overlay: {
            position: "fixed",
            zIndex: 9999,
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <MovieContext.Provider
            value={{ modalIsOpen, setModalIsOpen, trailerKey, handleUrlTrailer, options }}>
            {children}
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <YouTube videoId={trailerKey} opts={opts} />
            </ReactModal>
        </MovieContext.Provider>
    )
}
MovieProvider.propTypes = {
    children: PropTypes.node
}
export { MovieContext, MovieProvider }
