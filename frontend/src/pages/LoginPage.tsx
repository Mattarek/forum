import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const minPasswordLength = 10;
const validationSchema = Yup.object({
	email: Yup.string()
		.email("Podaj poprawny adres e-mail")
		.required("E-smail jest wymagany"),
	password: Yup.string()
		.required("Hasło jest wymagane")
		.min(
			minPasswordLength,
			`Hasło musi mieć minimum ${minPasswordLength} znaków`
		)
});

export const LoginPage: React.FC = () => {
	const handleSubmit = (values: { email: string; password: string }) => {
		console.log("Dane logowania:", values);
	};

	return (
		<div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 p-4">
			<div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
				<h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
					Zaloguj się
				</h1>
				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					<Form>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block text-sm font-bold text-gray-600 mb-2"
							>
								Adres e-mail:
							</label>
							<Field
								type="email"
								id="email"
								name="email"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
							<ErrorMessage
								name="email"
								component="div"
								className="text-red-500 text-sm mt-1"
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="password"
								className="block text-sm font-bold text-gray-600 mb-2"
							>
								Hasło
							</label>
							<Field
								type="password"
								id="password"
								name="password"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
							<ErrorMessage
								name="password"
								component="div"
								className="text-red-500 text-sm mt-1"
							/>
						</div>
						<button
							type="submit"
							className="w-full transition-shadow ease-in-out delay-450 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 shadow-md focus:ring-2 focus:ring-indigo-300"
						>
							Zaloguj się
						</button>
					</Form>
				</Formik>
				<p className="text-sm text-center text-black mt-6">
					Nie masz konta?
					<Link
						to="/register"
						className="text-indigo-700 font-bold ml-1"
					>
						Zarejestruj się
					</Link>
				</p>

				<p className="text-sm text-center text-black">
					Nie pamiętasz hasła?
					<Link
						to="/reset-password"
						className="text-indigo-700 font-bold ml-1"
					>
						Zresetuj haslo
					</Link>
				</p>
			</div>
		</div>
	);
};
