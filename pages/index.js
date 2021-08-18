import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
	{
		id: 1,
		title: "Lal Kila - First Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Delhi_fort.jpg/1920px-Delhi_fort.jpg",
		address:
			" Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
		description: "This is a first meetup",
	},
	{
		id: 2,
		title: "Lal Kila - Second Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Delhi_fort.jpg/1920px-Delhi_fort.jpg",
		address:
			" Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
		description: "This is a second meetup",
	},
	{
		id: 3,
		title: "Lal Kila - Third Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Delhi_fort.jpg/1920px-Delhi_fort.jpg",
		address:
			" Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
		description: "This is a third meetup",
	},
];
const index = () => {
	return (
		<>
			<h1>This is the homepage</h1>
			<MeetupList meetups={DUMMY_MEETUPS} />
		</>
	);
};

export default index;
