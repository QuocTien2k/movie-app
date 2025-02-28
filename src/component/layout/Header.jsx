import PropTypes from "prop-types"
import { useState } from "react";
const Header = ({ onSearch }) => {
    const [textSearch, setTextSearch] = useState("");
    return (
        <div className="p-4 bg-black flex items-center justify-between">
            {/* left side */}
            <div className="flex items-center space-x-4">
                <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
                <nav className="flex items-center space-x-4">
                    <a href="/" className="text-white">Trang chủ</a>
                    <a href="/about" className="text-white">Về chúng tôi</a>
                    <a href="/contact" className="text-white">Liên hệ</a>
                </nav>
            </div>
            {/* right side */}
            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Tìm kiếm..." className="p-3 text-black" value={textSearch} onChange={(e) => setTextSearch(e.target.value)} />
                <button onClick={() => onSearch(textSearch)} className="btn p-2 text-white bg-red-600">Tìm kiếm</button>
            </div>
        </div>
    )
}
Header.propTypes = {
    onSearch: PropTypes.func
}
export default Header