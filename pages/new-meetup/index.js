//our-domain/new-meetup
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
		<div>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</div>
	);
};

export default newMeetup;
