import Products from './pages/Products'
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './context/ToastContext'

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <Products />
      </CartProvider>
    </ToastProvider>
  )
}

export default App