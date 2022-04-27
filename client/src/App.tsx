import React, { useEffect, useState } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useLocation,
} from 'react-router-dom';
import { accessToken, logout } from './spotify';
import { LoginButton } from './components/LoginButton';
import { Profile } from './components/Profile';

const App = () => {
    const [token, setToken] = useState<string | boolean | null>();

    useEffect(() => {
        setToken(accessToken);
    }, []);

    return (
        <div className="h-full text-white bg-neutral-700">
            {!token ? (
                <LoginButton href="http://localhost:8888/login" />
            ) : (
                <>
                    <button className="absolute text-white round-lg" onClick={logout}>
                        Log Out
                    </button>
                    <Router>
                        <ScrollToTop />
                        <Routes>
                            <Route
                                path="/top-artists"
                                element={<h1>Top Artists</h1>}
                            />
                            <Route
                                path="/top-tracks"
                                element={<h1>Top Tracks</h1>}
                            />
                            <Route
                                path="/playlists/:id"
                                element={<h1>Playlist</h1>}
                            />
                            <Route
                                path="/playlists"
                                element={<h1>Playlists</h1>}
                            />
                            <Route path="/" element={<Profile />} />
                        </Routes>
                    </Router>
                </>
            )}
        </div>
    );
};

export default App;

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
