import styled from '@emotion/styled'

const MixedDiv = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2; /* right side spans both rows */
  overflow: auto;
  background-color: blue;
    border-radius: 1rem;
`;

const Heading = styled.h1`
    color: black;
    text-decoration: underline;
`;

const ExtendedHEading = styled(Heading)`
    color: yellow;
`;
export function MixedList() {
    return (
        <MixedDiv>
            <Heading>
                Mixed
            </Heading>  
        </MixedDiv>
    )
}