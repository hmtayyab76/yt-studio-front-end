import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AnalyticsPage from "../screens/analytics";


const Analytics = lazy(() => import("../screens/analytics/Analytics"));

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Navigate to="/analytics" />} />
            <Route path="/dashboard" element={<>Dashboard</>} />
            <Route path="/content" element={<>Content</>} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/comments" element={<>/comments</>} />
            <Route path="/copyright" element={<>/copyright</>} />
            <Route path="/subtitle" element={<>/subtitle</>} />
            <Route path="/earn" element={<>/earn</>} />
            <Route path="/customization" element={<>customization</>} />

            <Route path="/audio-library" element={<>/audio-library</>} />
            <Route path="/settings" element={<>Settings</>} />
            <Route path="/send-feedback" element={<>Send Feedback</>} />

        </Routes>
    );
};

export default AppRoutes;
