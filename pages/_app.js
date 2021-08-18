// import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
function MyApp({ Component, pageProps }) {
	return (
		<>
			{/* <Head>
				<title>The NextJS Meetup Project</title>
				<meta
					type="description"
					content="Browse a huge list of highly active React Meetups!"
				/>
			</Head> */}
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
