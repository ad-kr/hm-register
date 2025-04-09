import { BevisOversikt } from "./BevisOversikt";
import { LeggTilBevisKnapp } from "./LeggTilBevisKnapp";

export const Hovedside = () => {
	return (
		<div className="blokk">
			<h1>Registeret</h1>
			<LeggTilBevisKnapp />
			<BevisOversikt
			// bevisliste={this.props.alleBevis}
			// dispatch={this.props.dispatch}
			/>
		</div>
	);
};
