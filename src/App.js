import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import ProtectedRoute from "./containers/ProtectedRoute";
import PageNotFound from "./containers/PageNotFound";
import Dashboard from "./pages/dashboard";
import DataAnalytics from "./pages/data-analytics";

import Login from "./pages/login";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />

        <Route 
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="data-analytics" element={<DataAnalytics />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
