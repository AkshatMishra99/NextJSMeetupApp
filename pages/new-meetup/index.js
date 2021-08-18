//our-domain/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const newMeetup = () => {
	const addMeetupHandler = (enteredMeetup) => {
		console.log(enteredMeetup);
	};
	return (
		<div>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</div>
	);
};

export default newMeetup;
