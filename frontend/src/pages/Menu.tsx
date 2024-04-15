import './Menu.css';
import Header from '../components/Header';
import Button from '../components/buttons/Button';
import Sidebar from '../components/SideBar';

const categories = [{
        "category_name": "coffee",
        "category_list": [
            "Iced Americano",
            "Hot Americano"
        ]
    },
    {
        "category_name": "tea",
        "category_list": [
            "Green Tea",
            "Milk Tea"
        ]
    },
    {
        "category_name": "soda",
        "category_list": [
            "Strawberry Soda",
            "Lemon Soda"
        ]
    },
    {
        "category_name": "juice",
        "category_list": [
            "Strawberry Frappe",
            "Lemonade"
        ]
    },
    {
        "category_name": "desert",
        "category_list": [
            "Chocolate Cake",
            "Strawberry Cake"
        ]
    }
]

function Menu() {

    return (
        <>
            <Sidebar />
            <div className="menu-container">
                <Header />
                <div className="menus-container">
                    {categories.map(category => (
                        <Button
                            text={category.category_name}
                            className="menu-button"
                        />
                    ))}
                    <Button
                        text={"+ Create Menu"}
                        className="create-menu-button"
                    />
                </div>
                <div className="menus-cards-container">
                    To be added...
                </div>
                
            </div>
        </>
    )
}

export default Menu;