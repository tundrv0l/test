import React, { useState } from 'react';
import { Box, Button, Nav, Anchor, Heading, Collapsible } from 'grommet';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [openSection1, setOpenSection1] = useState(false);
  const [openSection2, setOpenSection2] = useState(false);

  return (
    <Box fill background="background">
      <Box align="center" pad="medium" background="brand">
        <Heading level="1" margin="none" color="light-1">Welcome to the Test Portal</Heading>
      </Box>
      <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
        <Box
          flex
          width="medium"
          background="light-2"
          elevation="small"
          pad="medium"
          align="center"
        >
          <Nav gap="small">
            <Button
              onClick={() => setOpenSection1(!openSection1)}
              label="Section 1"
              primary
            />
            <Collapsible open={openSection1}>
              <Box pad="small">
                <Anchor as={Link} to="/section1" label="Subsection 1.1" />
                <Anchor as={Link} to="/section1" label="Subsection 1.2" />
              </Box>
            </Collapsible>
            <Button
              onClick={() => setOpenSection2(!openSection2)}
              label="Section 2"
              primary
            />
            <Collapsible open={openSection2}>
              <Box pad="small">
                <Anchor as={Link} to="/section2" label="Subsection 2.1" />
                <Anchor as={Link} to="/section2" label="Subsection 2.2" />
              </Box>
            </Collapsible>
            <Anchor as={Link} to="/form" label="Form" />
            <Anchor as={Link} to="/report-issue" label="Report Issue" />
          </Nav>
        </Box>
        <Box flex align="center" justify="center">
          <Heading level="3" color="dark-2">Select an item from the left menu</Heading>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;