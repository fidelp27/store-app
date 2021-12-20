import { CartProvider } from "../context/CartContext"
import { AuthProvider } from "../context/ContextAuth"


export const Providers=({children})=>{
    return(
        <AuthProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </AuthProvider>
        
    )
}