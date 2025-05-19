import { Button, Spin } from 'antd';
import 'antd/dist/reset.css'; // หรือ 'antd/dist/antd.css' ถ้าใช้ antd v4
import { useEffect, useState } from 'react';
import { parentNames, type ParentNameType } from '../utils/parentName';
import { LoadingOutlined } from '@ant-design/icons';
import UserCard from '../components/home/UserCard';

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
		<main className="flex flex-col h-screen justify-between mt-8">
			<div>
				<div className="grid grid-cols-2 gap-4 px-8">
					<h1 className="text-7xl mt-58 self-start">
						พร้อมด่า<span className="text-[#FDC921] underline">บุพพการี</span>
						{/* <br /> */}
						<span className="mt-6 block">คนจันท์แล้วหรือยัง ?</span>
					</h1>
					{parent ? (
						<div className="flex flex-col items-center gap-4">
							<div>
								<p className="text-xl text-center">ถ้าพร้อมแล้วก็</p>
								<Button
									variant="outlined"
									size="large"
									style={{
										fontSize: '32px',
										width: '200px',
										height: '70px',
										backgroundColor: '#333',
										borderRadius: '8px',
										color: '#FFFDF7',
										borderColor: '#999',
									}}
								>
									อี{parent.nickname}
								</Button>
							</div>
							<p className="text-[#333]">
								ห้วยสะท้อน ตลาดน้ำพุ คิชฌกูฏ มะขาม หอมสวัสดิ์{' '}
								<span className="block">คมบาง หนองสีงา นายายอาม วัดดอนตาล โรบินสัน</span>
							</p>
						</div>
					) : (
						<Spin size="large" indicator={<LoadingOutlined />} style={{ color: '#FDC921' }}></Spin>
					)}
				</div>
				<section className='mt-8'>
					<UserCard
						imageUrl="https://scontent.futp1-1.fna.fbcdn.net/v/t39.30808-6/463829317_8503503266429714_7480336837930148823_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZTTsYswNM6oQ7kNvwHWEc8i&_nc_oc=AdkiPz4-982GD5mYTBHh9Sx32e9ZuYQ71WkBDoF3gOs7Bo255WpnKYddIapmlHdMXrlFPfH4aoKAB71i8nEkJQHZ&_nc_zt=23&_nc_ht=scontent.futp1-1.fna&_nc_gid=wpui__qhLJ9V4EtmMdYlVw&oh=00_AfL_MzgfEbRuVsTuM_DSntr-Gua8H7prtSgkNErJxLVulQ&oe=682FDCC7"
						title="Lawbreaker Fanclub"
						description="Dinner is served. Hope your insurance is active."
					/>
				</section>
			</div>
			<section className=" bg-[#fdc921] pt-4">
				{/* footer */}
				<p className="text-lg text-center ">
					Made with ♥️ by{' '}
					<a target="_blank" className="underline" href="https://github.com/DefinitelyNotJay">
						@Mr.Wind-Up Bird
					</a>
				</p>
			</section>
		</main>
	);
};

export default Home;
