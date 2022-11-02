import React, { useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import EmailEditor from '../../../src';
import sample from './sample.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Bar = styled.div`
  flex: 1;
  background-color: #61dafb;
  color: #000;
  padding: 10px;
  display: flex;
  max-height: 40px;

  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }

  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
  }
`;

const Example = (props) => {
  const emailEditorRef = useRef(null);

  const saveDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
      console.log('saveDesign', design);
      alert('Design JSON has been logged in your developer console.');
    });
  };
  const Email = () => {
    return (window.location.href = 'http://localhost:3000/');
  };
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
      let data1 = {
        data: html,
      };
      axios
        .post(
          'http://localhost:8080/email/emailsent?name=vimal&email_id=' +
            'vsvimal5420@gmail.com',
          data1
        )
        .then((res) => {
          console.log(res);
          Email();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const onDesignLoad = (data) => {
    console.log('onDesignLoad', data);
  };

  const onLoad = () => {
    console.log('onLoad');

    emailEditorRef.current.editor.addEventListener(
      'design:loaded',
      onDesignLoad
    );

    emailEditorRef.current.editor.loadDesign(sample);
  };

  const onReady = () => {
    console.log('onReady');
  };

  return (
    <Container>
      <Bar>
        <h1>CDP360</h1>

        <button onClick={saveDesign}>Save Design</button>
        <button onClick={exportHtml}>Export HTML</button>
      </Bar>

      <React.StrictMode>
        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      </React.StrictMode>
    </Container>
  );
};

export default Example;