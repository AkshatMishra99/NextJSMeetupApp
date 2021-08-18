import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const index = (props) => {
	return (
		<>
			<Head>
				<title>The NextJS Meetup Project</title>
			</Head>
			<h1>This is the homepage</h1>
			<MeetupList meetups={props.meetups} />
		</>
	);
};
export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://zedith9903:milestone0903@cluster0.bcm0h.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();
	const meetupsCollection = db.collection("meetups");
	const meetups = await meetupsCollection.find().toArray();
	console.log(meetups);
	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				image: meetup.image,
				address: meetup.address,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 10,
	};
}
export default index;
