import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Query/Query.jsx";
import Service from "./pages/Conatct/Contact.jsx";
import Pages from "./pages/Pages/Pages.jsx";
import AdminLayout from "./pages/Pages/AdminLayout.jsx";
import ActiveQueries from "./pages/Pages/ActiveQueries.jsx";
import SolvedQueries from "./pages/Pages/SolvedQueries.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/Pages/LoginPage/LoginPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="active" element={<ActiveQueries />} />
          <Route path="solved" element={<SolvedQueries />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
