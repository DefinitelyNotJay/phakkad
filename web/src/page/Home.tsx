import { Button, Spin } from 'antd';
import 'antd/dist/reset.css'; // หรือ 'antd/dist/antd.css' ถ้าใช้ antd v4
import { useEffect, useState } from 'react';
import { parentNames, type ParentNameType } from '../utils/parentName';
import { LoadingOutlined } from '@ant-design/icons';

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
