import styled from "styled-components";
import Heading from "../ui/Heading";

const StyledMobileScreen = styled.div`
	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: center;
	padding: 3rem;
	background-color: var(--color-brand-600);
	color: var(--color-grey-0);
	text-align: center;
`;

function MobileScreen() {
	return (
		<>
			<StyledMobileScreen>
				<div>
					<Heading as="h4">
						For the best experience, please use a device with a larger screen
						😁. We recommend a width of at least 1024px.
					</Heading>
				</div>
			</StyledMobileScreen>
		</>
	);
}

export default MobileScreen;
