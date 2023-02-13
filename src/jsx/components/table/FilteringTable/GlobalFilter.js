import React from 'react';
import {  Button } from 'react-bootstrap'
export const GlobalFilter = ({ filter, setFilter }) => {
	return (
		<div>
			Search : {' '}
			<input className="ml-2 input-search"
				value={filter || ''} onChange={e => setFilter(e.target.value)} style={{ width: "20%" }}
			/> <Button  variant='info'>Search</Button>
		</div>
	)
} 