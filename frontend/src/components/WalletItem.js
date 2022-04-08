import { Col } from 'react-bootstrap';

const WalletItem = ({ children, ...props }) => {
	return (
		<Col
			{...props}
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{children}
		</Col>
	);
};

export default WalletItem;
