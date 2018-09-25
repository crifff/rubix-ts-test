import * as React from 'react';

import {
  Button,
  Checkbox,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Grid,
  HelpBlock,
  MainContainer,
  PageHeader,
  Panel,
  PanelBody,
  PanelContainer,
  PanelHeader,
  Radio,
  Row,
} from "@sketchpixy/rubix";

import './style/App.scss';

class App extends React.Component {
  public render() {
    return (
      <MainContainer {...this.props}>
        <PageHeader>Example page header <small>Subtext for header</small></PageHeader>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer>
                <Panel>
                  <PanelHeader className="bg-green">
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h4>Panel Body + Header without Panel Footer</h4>
                          <h6>Mini Heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{ padding: 0 }}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Form>
                            <FormGroup controlId="formControlsEmail">
                              <ControlLabel>Email address</ControlLabel>
                              <FormControl type="email" placeholder="Enter email" />
                            </FormGroup>
                            <FormGroup controlId="formControlsPassword">
                              <ControlLabel>Password</ControlLabel>
                              <FormControl type="password" />
                            </FormGroup>
                            <FormGroup controlId="formControlsFile">
                              <ControlLabel>File</ControlLabel>
                              <FormControl type="file" />
                              <HelpBlock>Example block-level help text here.</HelpBlock>
                            </FormGroup>

                            <Checkbox checked={true} readOnly={true} disabled={true}>Checkbox</Checkbox>
                            <Radio checked={true} readOnly={true}>Radio</Radio>

                            <FormGroup>
                              <Checkbox inline={true}>1</Checkbox>
                              <Checkbox inline={true}>2</Checkbox>
                              <Checkbox inline={true}>3</Checkbox>
                            </FormGroup>

                            <FormGroup>
                              <Radio inline={true}>1</Radio>
                              <Radio inline={true}>2</Radio>
                              <Radio inline={true}>3</Radio>
                            </FormGroup>

                            <FormGroup controlId="formControlsSelect">
                              <ControlLabel>Select</ControlLabel>
                              <FormControl componentClass="select" placeholder="select">
                                <option value="select">select</option>
                                <option value="other">...</option>
                              </FormControl>
                            </FormGroup>

                            <FormGroup controlId="formControlsSelectMultiple">
                              <ControlLabel>Multiple select</ControlLabel>
                              <FormControl componentClass="select" multiple={true}>
                                <option value="select">select (multiple)</option>
                                <option value="other">...</option>
                              </FormControl>
                            </FormGroup>

                            <FormGroup controlId="formControlsTextarea">
                              <ControlLabel>Textarea</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="textarea" />
                            </FormGroup>

                            <FormGroup>
                              <ControlLabel>Static text</ControlLabel>
                              <FormControl.Static>email@example.com</FormControl.Static>
                            </FormGroup>

                            <FormGroup>
                              <Button type="submit" bsStyle="primary">Submit</Button>
                            </FormGroup>

                          </Form>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </MainContainer>
    );
  }
}

export default App;
