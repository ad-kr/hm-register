import { Bevis, BevisDetaljer } from "./BevisDetaljer";

export const BevisOversikt = () => {
	const bevisliste: Bevis[] = [
		{
			navn: "wow",
			kommunenummer: "yep",
			bevisnummer: "ok",
			fodselsaar: "2",
			kjonn: "ja",
			brukerkode: "1234",
			gyldigFra: "1234",
			gyldigTil: "4321",
		},
	];

	return (
		<div className="blokk">
			<h2 className="blokk-heading">Bevisoversikt</h2>
			<ul className="bevisliste blokk-innhold">
				{bevisliste.map((bevis, index) => (
					<BevisDetaljer key={index} bevis={bevis} />
				))}
			</ul>
		</div>
	);
};
