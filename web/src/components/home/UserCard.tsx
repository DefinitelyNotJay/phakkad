import Card from 'antd/es/card/Card';
import Meta from 'antd/es/card/Meta';

const UserCard = ({
	imageUrl,
	title,
	description,
}: {
	imageUrl: string;
	title: string;
	description: string;
}) => {
	return (
		<Card hoverable style={{ width: 300 }} cover={<img src={imageUrl} />}>
			<Meta title={title} description={description} />
		</Card>
	);
};

export default UserCard;
