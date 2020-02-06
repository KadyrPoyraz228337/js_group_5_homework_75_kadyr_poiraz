import React from 'react';
import './App.css';
import {Button, Container, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {getDecodeData, getEncodeData, inputChangeHandler} from "./store/actions/actions";

const App = props => {
    const state = props.state;

    const inputChangeHandler = e => props.inputChangeHandler(e);

  return (
    <Container className='bg-light border rounded p-3 my-3 d-flex flex-column'>
      <Label className='w-50'>
        <p>Encode</p>
        <Input
            type='textarea'
            name='encode'
            style={{resize: 'none', height: '200px'}}
            placeholder='Add some encode text'
            value={state.encode}
            onChange={inputChangeHandler}
        />
      </Label>
      <div className='d-flex align-items-center'>
        <Label className='w-50 d-flex align-items-center'>
          <p className='m-0'>Password</p>
          <Input
              type='text'
              name='password'
              className='mx-3 w-50'
              placeholder='Add password'
              value={state.password}
              onChange={inputChangeHandler}
          />
            <Button className='mr-3' onClick={() => props.getEncodeData(state)}>&#8595;</Button>
            <Button onClick={() => props.getDecodeData(state)}>&#8593;</Button>
        </Label>
      </div>
      <Label className='w-50'>
        <p>Decode</p>
        <Input
            type='textarea'
            name='decode'
            style={{resize: 'none', height: '200px'}}
            placeholder='Add some decode text'
            value={state.decode}
            onChange={inputChangeHandler}
        />
      </Label>
    </Container>
  );
};

const mapStateToProps = state => ({
   state: state
});

const mapDispatchToProps = dispatch => ({
    inputChangeHandler: e => dispatch(inputChangeHandler(e)),
    getEncodeData: data => dispatch(getEncodeData(data)),
    getDecodeData: data => dispatch(getDecodeData(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
