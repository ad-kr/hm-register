import { useNavigate } from "react-router";

export const LeggTilBevisKnapp = () => {
	const navigate = useNavigate();

	return (
		<div className="blokk">
			<div
				className="legg-til-bevis-knapp knapp"
				onClick={() => navigate("/nytt-bevis")}
			>
				<i className="fa fa-plus" aria-hidden="true"></i>
				<span>Legg til nytt bevis</span>
			</div>
		</div>
	);
};
