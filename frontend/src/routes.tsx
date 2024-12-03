import { createBrowserRouter, redirect } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { ForgotPassword } from "./pages/ForgotPassword";
import { RegisterPage } from "./pages/RegisterPage";

export const router = createBrowserRouter([
	{
		path: "/",
		loader: () => redirect("/login")
	},
	{
		element: <LoginPage />,
		path: "/login"
	},
	{
		element: <ForgotPassword />,
		path: "/reset-password"
	},
	{
		element: <RegisterPage />,
		path: "/register"
	},
	{
		path: "/dashboard"
	}
]);
