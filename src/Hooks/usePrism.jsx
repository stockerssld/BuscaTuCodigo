import { useState } from 'react';
export function usePrism() {
	const [ prismPath, setPrismPath ] = useState('A Welcome Message.');
	const [ prismData, setPrismData ] = useState(`About.
==============
Bienvenido a la experiencia a BuscaTuCodigo
==============
`);
	return {
		prismPath,
		setPrismPath,
		prismData,
		setPrismData
	};
}