import * as React from 'react';
import { Heading, Spacer } from '@1milligram/design';

const Heading2 = (props) => (
    <>
        <Spacer size="medium" />
        <Heading level={2}>{props.children}</Heading>
    </>
);

export default Heading2;
