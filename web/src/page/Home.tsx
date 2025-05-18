import { Button } from 'antd';
import 'antd/dist/reset.css'; // หรือ 'antd/dist/antd.css' ถ้าใช้ antd v4
import { useEffect, useState } from 'react';
import { parentNames, type ParentNameType } from '../utils/parentName';

const Home = () => {
	const [parent, setParent] = useState<ParentNameType | null>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			const randInt = Math.floor(Math.random() * parentNames.length);
			setParent(parentNames[randInt]);
		}, 800);

		return () => clearInterval(interval);
	}, []);

	return (
		<main>
			<div className="flex justify-between items-center mt-8">
				<h1 className="text-8xl ml-12 mt-58">
					พร้อมด่า<span className="text-[#FDC921] underline">บุพพการี</span>
					{/* <br /> */}
					<span className="mt-6 block">คนอื่นแล้วหรือยัง ?</span>
				</h1>
				{!!parent && (
					<div className="flex flex-col items-center gap-4 mr-20">
						<Button
							variant="outlined"
							size="large"
							style={{
								fontSize: '38px',
								width: '200px',
								height: '70px',
								backgroundColor: '#333',
								borderRadius: '8px',
								color: '#FFFDF7',
								// borderWidth: "1px",
								borderColor: '#999',
							}}
						>
							อี{parent.nickname}
						</Button>
						<p className="text-2xl">
							ห้วยสะท้อน ตลาดน้ำพุ คิชฌกูฏ มะขาม หอมสวัสดิ์{' '}
							<span className="block">คมบาง หนองสีงา นายายอาม วัดดอนตาล โรบินสัน</span>
						</p>
					</div>
				)}
			</div>
			
		</main>
	);
};

export default Home;
