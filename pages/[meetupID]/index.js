import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const DetailPage = (props) => {
	// const details = ;
	const { meetupData: meetup } = props;
	return (
		<MeetupDetails
			// id={meetup.id}
			title={meetup.title}
			description={meetup.description}
			address={meetup.address}
			image={meetup.image}
		/>
	);
};
export const getStaticPaths = async () => {
	const client = await MongoClient.connect(
		"mongodb+srv://zedith9903:milestone0903@cluster0.bcm0h.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();
	const meetupsCollection = db.collection("meetups");
	const meetups = await meetupsCollection.find({}, "_id").toArray();
	const paths = meetups.map((meetup) => ({
		params: { meetupID: meetup._id.toString() },
	}));
	client.close();
	return {
		paths,
		fallback: false,
	};
};
export const getStaticProps = async (ctx) => {
	// console.log(ctx.params.meetupID);
	const meetupID = ctx.params.meetupID;
	console.log(meetupID);
	const client = await MongoClient.connect(
		"mongodb+srv://zedith9903:milestone0903@cluster0.bcm0h.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();
	const meetupsCollection = db.collection("meetups");
	const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupID) });
	console.log(meetup);
	client.close();
	// const { _id, title, image, address } = meetup;
	return {
		props: {
			meetupData: { ...meetup, _id: meetup._id.toString() },
		},
	};
};
export default DetailPage;
