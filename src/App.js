import React from "react";
import PaintingList from "./components/PaintingList";
import paintings from "./paintings.json";
import Logo from "./components/Logo";

const App = () => {
    return (
        <div>
            <Logo text="Main container component" />
            <PaintingList items={paintings} />            
        </div>
    );
};

export default App;