import { useState } from 'react';
export function usePropiedad() {
	const [ propiedad, setPropiedad ] = useState(null)
	return {
		propiedad,
		setPropiedad,
	};
}