// Code: Main entry point for the frontend application
// Wrap your ContextProvider here. Important: Wrap to RouterProvider only

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../theme.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './pages'
import GlobalProvider from './context/GlobalProvider'
import ThemeProvider from './context/ThemeProvider'
// import Question from './components/Question.jsx'
import { Questions, AddCategoryForm, AddQuestionForm,Profile } from './components/admin_sections'


// Add or remove routes as needed
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/admin',
    element: <App />,
    children: [
      {
        path: '',
        element: <Profile />
      },
      {
        path: 'add-category',
        element: <AddCategoryForm />,
        errorElement: <h1>Token is invalid please login again or contact other admins to create account</h1>
      },
      {
        path: 'add-question',
        element: <AddQuestionForm />,
        errorElement: <h1>Token is invalid please login again or contact other admins to create account</h1>
      },
      {
        path: 'questions',
        element: <Questions />,
        errorElement: <h1>Token is invalid please login again or contact other admins to create account</h1>
      }
    ]
  },

  // {
  //   path: 'test',
  //   element: <Question/>
  // },

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider>
      <ThemeProvider>
        <GlobalProvider>
          <RouterProvider router={router} />
        </GlobalProvider>
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>,
)
