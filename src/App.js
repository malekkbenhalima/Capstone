import {Routes, Route} from "react-router";
import NavigationComponent from './routes/navigation/navigation.component'
import Home from "./routes/home/home.component";

const Shop = () => {
    return (
        <div>
            I am the shop
        </div>
    )
}

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<NavigationComponent />}>
                <Route index element={<Home />} />
                <Route path={'/shop'} element={<Shop />}/>
            </Route>
        </Routes>
    );
}

export default App;
