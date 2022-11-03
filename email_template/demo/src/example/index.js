import React, { useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import EmailEditor from '../../../src';
const dataSample = require('./sample.json');
var user_name = 'sam dev';
var userName = `<p style=\"line-height: 140%; text-align: center; font-size: 14px;\"><strong><span style=\"font-size: 16px; line-height: 22.4px;\">Hey ${user_name}!</span></strong></p>`;
var image1 =
  'https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg';
var image2 =
  'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg';
var image3 =
  'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg';
var data = dataSample;

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
    let result = data.body.rows.map((e) => {
      e.columns.map((h) => {
        h.contents.filter((j, num) => {
          if (j.type == 'image' && num == 0) {
            console.log(j.id);
            if (j.id == 'E6QqYzhIDp') {
              j.values.src.url = image1;
            }
            if (j.id == 'N89QkLpkI-') {
              j.values.src.url = image2;
            }
            if (j.id == 'bSCv6xONew') {
              j.values.src.url = image3;
            }
          }
          if (j.type == 'text' && num == 2) {
            j.values.text = userName;
          }
        });
      });
      return e;
    });
    data.body.rows = result;
    emailEditorRef.current.editor.loadDesign(data);
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
