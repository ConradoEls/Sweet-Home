import Form from "../components/pages/Form/Form"
import ItemListContainer from "../components/pages/ItemListContainer/ItemListContainer"
import ProductDetailContainer from "../components/pages/ProductDetail/ProductDetailContainer"

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "categories",
        path: "/category/:categoryName",
        Element: ItemListContainer
    },
    {
        id: "productDetail",
        path: "/productDetail/:id",
        Element: ProductDetailContainer
    },
    {
        id: "form",
        path: "/form",
        Element: Form
    },

]