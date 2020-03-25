import { useState } from 'react';
export function usePrism() {
	const [ prismPath, setPrismPath ] = useState('Bienvenido a BuscaTuCodigo');
	const [ prismData, setPrismData ] = useState(`About.
==============
Bienvenido a BuscaTuCodigo
==============
`);
	return {
		prismPath,
		setPrismPath,
		prismData,
		setPrismData
	};
}