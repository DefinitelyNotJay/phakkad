import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

const TopNavigationBar = () => {
	return (
		<div className="sticky top-0 left-0 z-99 bg-[#f2f4f3] py-1 px-16 flex justify-between items-center text-[#0a0908]">
			<p className="text-4xl font-semibold translate-y-4">คิวรถผักกาด</p>

			<div className="flex gap-4 items-center text-2xl">
				<Link to="/" className="hover:bg-gray-300 px-3 py-1 rounded-sm">
					หน้าหลัก
				</Link>
				<Link to="/about" className="hover:bg-gray-300 px-3 py-1 rounded-sm">
					เกี่ยวกับเรา
				</Link>
				<Link to="/about" className="hover:bg-gray-300 px-3 py-1 rounded-sm">
					รายนามบุพการี
				</Link>
				<Link to="/about" className="hover:bg-gray-300 px-3 py-1 rounded-sm">
					ติดต่อ
				</Link>
			</div>
			<Avatar icon={<UserOutlined />} className="scale-150" />
		</div>
	);
};

export default TopNavigationBar;
