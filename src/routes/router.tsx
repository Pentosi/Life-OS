import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "@/app/layouts/app-layout";
import { DashboardLayout } from "@/app/layouts/dashboard-layout";
import { ProtectedLayout } from "@/app/layouts/protected-layout";

import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";
import SignupPage from "@/features/auth/pages/SignupPage";
import VerifyEmailPage from "@/features/auth/pages/VerifyEmailPage";

import HomePage from "@/features/home/pages/HomePage";

import { ROUTES } from "./paths";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      // Public routes
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.SIGNUP,
        element: <SignupPage />,
      },
      {
        path: ROUTES.FORGOT_PASSWORD,
        element: <ForgotPasswordPage />,
      },
      {
        path: ROUTES.RESET_PASSWORD,
        element: <ResetPasswordPage />,
      },
      {
        path: ROUTES.VERIFY_EMAIL,
        element: <VerifyEmailPage />,
      },

      // Protected routes
      {
        element: <ProtectedLayout />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              {
                path: ROUTES.HOME,
                element: <HomePage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);