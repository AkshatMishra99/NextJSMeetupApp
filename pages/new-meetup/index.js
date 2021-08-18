//our-domain/new-meetup
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
const newMeetup = () => {
	const router = useRouter();
	const addMeetupHandler = async (enteredMeetup) => {
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(enteredMeetup),
		});
		const data = await response.json();
		console.log(data);
		router.replace("/");
	};
	return (
		<>
			<Head>
				<title>Add New Meetup</title>
				<meta
					type="description"
					content="Browse a huge list of highly active React Meetups!"
				/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</>
	);
};

export default newMeetup;
