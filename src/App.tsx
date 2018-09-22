import * as React from 'react';

import {Col, Grid, MainContainer,Row} from "@sketchpixy/rubix";
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <MainContainer {...this.props}>
          <div id="body">
              <Grid>
                  <Row>
                      <Col xs={12}>
                          hoge
                      </Col>
                  </Row>
              </Grid>
          </div>
      </MainContainer>
    );
  }
}

export default App;
