
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import AppRoutes from './routes'
import GlobalStyles from './styles/global'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </>
)
