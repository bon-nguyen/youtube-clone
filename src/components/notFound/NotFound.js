import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './_notFound.scss';
const NotFound = () => {
    return (
        <div className="page-error">
            <div className="page-error__content">
                <img 
                    src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
                    alt="not found" 
                />
                <p>Page Not Default</p>
                <p>Try to find another</p>
                <div className="page-error__masthead">
                    <Link path='/'>
                        <img
                            src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
                            alt=""
                        />
                    </Link>
                    <form>
                        <input type="text" placeholder="Search" />
                        <button type="submit">
                            <AiOutlineSearch size={22} />
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default NotFound;