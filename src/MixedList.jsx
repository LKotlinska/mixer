import styled from '@emotion/styled'
import { Person } from './Person'

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

const GroupBlock = styled.div`
    border: 1px solid white;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
`;

export function MixedList({ bg, groups = {} }) {
    return (
        <MixedDiv bg={bg}>
            <Heading>Mixed</Heading>
            {Object.entries(groups).map(([groupId, members]) => (
                <GroupBlock key={groupId}>
                    <h3>Group {groupId}</h3>
                    {members.map(student => (
                        <Person key={student.id} {...student} />
                    ))}
                </GroupBlock>
            ))}
        </MixedDiv>
    )
}