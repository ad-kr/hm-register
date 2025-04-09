export type Bevis = {
	navn: string;
	kommunenummer: string;
	bevisnummer: string;
	fodselsaar: string;
	kjonn: string;
	brukerkode: string;
	gyldigFra: string;
	gyldigTil: string;
};

type BevisDetaljerProps = {
	bevis: Bevis;
};

export const BevisDetaljer = (props: BevisDetaljerProps) => {
	return (
		<li className="bevis">
			<div className="bevisdetaljer bevis-navn">{props.bevis.navn}</div>
			<div className="bevisdetaljer bevis-nummer">
				{props.bevis.kommunenummer} {props.bevis.bevisnummer}{" "}
				{props.bevis.fodselsaar} {props.bevis.kjonn}{" "}
				{props.bevis.brukerkode}
			</div>
			<div className="bevisdetaljer bevis-gyldig">
				Gyldighetsperiode: {props.bevis.gyldigFra} -{" "}
				{props.bevis.gyldigTil}
			</div>
		</li>
	);
};
