import MeetupDetails from "../../components/meetups/MeetupDetails";

const DetailPage = () => {
	const details = {
		id: 1,
		title: "The first meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Delhi_fort.jpg/1920px-Delhi_fort.jpg",
		address:
			"Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
		description: "The first meetup",
	};
	return (
		<MeetupDetails
			id={details.id}
			title={details.title}
			description={details.description}
			address={details.address}
			image={details.image}
		/>
	);
};

export default DetailPage;
