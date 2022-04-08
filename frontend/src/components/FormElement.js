import React from 'react';
import { Form, Row, Col, InputGroup } from 'react-bootstrap';

const FormElement = ({ controlId, label, onChange, children, ...props }) => {
	return (
		<Form.Group
			className="justify-content-md-center"
			as={Row}
			controlId={controlId}
			style={{ margin: '8px' }}
		>
			<Form.Label column sm="2">
				{label}
			</Form.Label>
			<Col sm="4">
				<InputGroup hasValidation>
					<Form.Control required onChange={(e) => onChange(e)} {...props}>
						{children}
					</Form.Control>
					<Form.Control.Feedback type="invalid">
						This field is required.
					</Form.Control.Feedback>
				</InputGroup>
			</Col>
		</Form.Group>
	);
};

export default FormElement;
